<script>
    import Github from 'virtual:icons/simple-icons/github'
    import Discord from 'virtual:icons/simple-icons/discord'
    import Mail from 'virtual:icons/lucide/mail'
    import Location from 'virtual:icons/lucide/map-pin'

    let links = [
        { icon: Location, value: 'Prague, Czech Republic', href: null },
        { icon: Github, value: '@limit-sest', href: 'https://github.com/limit-sest' },
        { icon: Discord, value: '@limit6', href: null },
        { icon: Mail, value: 'hello@limit6.eu', href: 'mailto:hello@limit6.eu' }
    ]
</script>

<div class="sticky top-20 right-0 left-0 border-2 border-fgDim/10 col-span-1 rounded-3xl">
    <div class="flex flex-col gap-4 md:gap-6 p-4 md:p-6">
        <div>
            <h1 class="font-display font-bold text-2xl md:text-4xl text-fg mb-3">Antonín Kučera</h1>
            <p class="text-lg md:text-xl text-fgDim">I’m a designer and programmer that enjoys making creative things.</p>
        </div>
        <hr class="border-t border-fgDim/75">
        <div class="flex flex-col gap-3">
            {#each links as link}
                <div class="flex gap-3 items-center">
                    <svelte:component this={link.icon} class="text-fgDim w-auto h-full"></svelte:component>
                    {#if link.href}
                        <a class="text-fgDim hover:underline" href="{link.href}">{link.value}</a>
                    {:else}
                        <p class="text-fgDim">{link.value}</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>