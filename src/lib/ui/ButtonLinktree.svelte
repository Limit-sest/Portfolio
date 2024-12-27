<script>
    import Github from 'virtual:icons/simple-icons/github'
    import Discord from 'virtual:icons/simple-icons/discord'
    import Mail from 'virtual:icons/lucide/mail'
    let { label, href, username } = $props();
</script>

<a href="{href}" aria-label="{label} link button" class="flex justify-start md:justify-between gap-4 items-center h-12 px-6 | rounded-full bg-fgDim | transition-colors hover:bg-fg">
    <div class="flex items-center gap-4">
        {#if label === 'Github'}
            <Github class="w-8 h-auto text-bg/80"/>
        {:else if label === 'Discord'}
            <Discord class="w-8 h-auto text-bg/80"/>
        {:else if label === 'Email'}
            <Mail class="w-8 h-auto text-bg/80"/>
        {/if}
        <p class="uppercase font-display font-medium text-bg/80 hidden md:block">{label}</p>
    </div>
    <p aria-label="username" class="font-display font-bold text-bg">{username}</p>
</a>
