<script lang="ts">
	import '../app.css';
	let { children } = $props();

    const webLinks = [
        {
            label: "Source code",
            href: "https://github.com/Limit-sest/Portfolio"
        }
    ]
</script>

<div class="bg-bg">
    {@render children()}
</div>

<footer class="bg-bgDim w-full p-4">
    <div class="p-4 grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        <div class="flex flex-col gap-2">
            <p class="text-sm font-display font-medium">WEBSITE</p>

        </div>
    </div>
</footer>