<script>
    let { project } = $props();
</script>

<article class="w-full mb-6">
    <div class="p-4 md:p-6 w-full bg-bgDim rounded-3xl">
        <div class="aspect-video w-full mb-3">
            <img class="object-cover rounded-lg w-full h-full" src="/projects/{project.id}.png" alt="{project.imgAlt}">
        </div>
        <header>
            <h3 class="font-medium text-xl text-fg font-display mb-1">{project.title}</h3>
            <div class="flex gap-1.5 mb-2" aria-label="Tags of {project.title}">
                {#each project.tags as tag}
                    <p class="text-fgDim text-xs md:text-sm">{tag}</p>
                    <p class="text-fgDim/75 text-xs md:text-sm">•</p>
                {/each}
                <p class="text-fgDim text-xs md:text-sm">{project.year}</p>
            </div>
        </header>
        <p class="text-sm md:text-base text-fgDim">{project.description}</p>
    </div>
</article>