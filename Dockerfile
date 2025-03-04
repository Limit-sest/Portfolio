# Stage 1: Build
FROM oven/bun:latest AS builder
WORKDIR /app

# Copy dependency files (adjust filenames if needed)
COPY package.json ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application source code
COPY . .

# Build your SvelteKit project (ensure your package.json has a "build" script)
RUN bun run build


# Delete source code files that were used to build the app that are no longer needed
RUN rm -rf src/ static/

# Stage 2: Production
FROM oven/bun:latest
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app .

# Expose the port your app listens on (e.g., 3000)
EXPOSE 3000

# Start the SvelteKit application
CMD ["bun", "run", "build/index.js"]
