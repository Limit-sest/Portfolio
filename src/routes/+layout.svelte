<script lang="ts">
	import '../app.css';
	let { children } = $props();

    const webLinks = [
        {
            label: "Source code",
            href: "https://github.com/Limit-sest/Portfolio"
        },
        {
            label: "Bug report",
            href: "https://github.com/Limit-sest/Portfolio/issues/new"
        },
        {
            label: "Suggestion",
            href: "https://github.com/Limit-sest/Portfolio/issues/new"
        }
    ]
</script>

<div class="bg-bg">
    {@render children()}
</div>

<footer class="bg-bgDim w-full p-4 mt-32">
    <div class="p-4 grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-1 justify-between">
            {#each webLinks as link, i}
                <a href={link.href} target="_blank" class="text-fgDim hover:underline hover:text-accent">{link.label}</a>
                {#if i < webLinks.length - 1}
                    <span class="text-fgDim/85 hidden md:block">•</span>
                {/if}
            {/each}
        </div>

        <p class="text-right">&copy; Antonín Kučera 2025, All rights reserved. <br>Made with ❤️ and ☕</p>
    </div>
</footer>