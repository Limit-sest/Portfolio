<script>
    let { label, href} = $props();
</script>

<a href="{href}" aria-label="{label} link button" class="py-1.5 px-4 | rounded-full bg-fgDim | transition-all hover:bg-accent font-display font-medium text-bg text-sm hover:text-fg">
    {label}
</a>
