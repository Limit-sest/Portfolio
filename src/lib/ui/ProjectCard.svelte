<script>
    import ButtonPrimary from "$lib/ui/ButtonPrimary.svelte";
    import ButtonOutline from "$lib/ui/ButtonOutline.svelte";
    import Image from "$lib/ui/Image.svelte";

    let { project } = $props();
</script>

<article class="w-full mb-4">
    <div class="p-4 md:p-6 w-full bg-bgDim rounded-3xl">
        <div class="aspect-video w-full mb-3">
            <Image
                    image="{project.id}.png"
                    alt="{project.imgAlt}"
                    loading="lazy"
            />
<!--            <img class="object-cover rounded-lg w-full h-full" src="/src/content/assets/projects/{project.id}.png" alt="{project.imgAlt}">-->
        </div>
        <header>
            <h3 class="font-medium text-xl text-fg font-display mb-1">{project.title}</h3>
            <div class="flex gap-1.5 mb-2" aria-label="Tags of {project.title}">
                {#each project.tags as tag}
                    <p class="text-fgDim text-xs md:text-sm">{tag}</p>
                    <span class="text-fgDim/75 text-xs md:text-sm">•</span>
                {/each}
                <p class="text-fgDim text-xs md:text-sm">{project.year}</p>
            </div>
        </header>
        <p class="text-sm md:text-base text-fgDim mb-6">{project.description}</p>
        <div class="flex gap-2">
            {#each project.buttons as button, index}
                {#if index === 0}
                    <ButtonPrimary label={button.label} href={button.href}></ButtonPrimary>
                {:else}
                    <ButtonOutline label={button.label} href={button.href}></ButtonOutline>
                {/if}
            {/each}
        </div>
    </div>
</article>