<script>
    let { label, href } = $props();
</script>

<a href="{href}" class="bg-accent/5 text-accent font-bold font-display rounded-md border-border border px-3 py-2 flex items-center justify-center gap-1 w-fit h-auto sm:h-10 text-sm sm:text-base">
    {label}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right hidden sm:block"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right block sm:hidden"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
</a>