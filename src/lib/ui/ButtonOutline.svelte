<script>
    let { label, href} = $props();
</script>

<a href="{href}" aria-label="{label} link button" class="py-1.5 px-4 | rounded-full | transition-all hover:bg-accent/30 font-display font-medium text-fgDim hover:text-fg text-sm border border-fgDim hover:border-fg">
    {label}
</a>
