<svelte:head>
    <title>Portfolio • Antonín Kučera</title>
    <meta name="description" content="Personal site of Antonín Kučera. I showcase my programming projects and graphic design." />
</svelte:head>

<script>
    import PersonalCard from "$lib/ui/PersonalCard.svelte";
    import ProjectCard from "$lib/ui/ProjectCard.svelte";
    import { projects } from "$lib/data/projects.js";
    import ButtonPrimary from "$lib/ui/ButtonPrimary.svelte";
    import { designs } from "$lib/data/designs.js";
    import Image from "$lib/ui/Image.svelte";
</script>

<main class="px-4 pt-20 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
    <h2 class="col-span-2 text-center text-fgDim font-display text-3xl my-8">Welcome to my portfolio!</h2>

    <section aria-label="About me" class="w-full relative h-full">
        <PersonalCard></PersonalCard>
    </section>

    <div class="w-full col-span-1 col-start-2 flex flex-col gap-8">
        <section>
            <h2 class="w-full text-center text-fg font-display font-medium text-3xl mb-8">My projects</h2>
            {#each projects as project}
                {#if project.quality >= 5}
                    <ProjectCard project={project}></ProjectCard>
                {/if}
            {/each}

            <div class="flex my-8 w-full justify-center">
                <ButtonPrimary label="View more projects" href="./projects"></ButtonPrimary>
            </div>
        </section>

        <section >
            <h2 class="w-full text-center text-fg font-display font-medium text-3xl mb-8">Graphic designs</h2>
            <div class="flex flex-col gap-4">
                {#each designs as design}
                    {#if design.aspectRatio >= 2}
                        <Image
                                image="{design.id}.png"
                                alt="{design.alt}"
                                loading="lazy"
                        />
                    {/if}
                {/each}

                <div class="grid grid-cols-2 gap-4">
                    {#each designs as design}
                        {#if design.aspectRatio < 2}
                            <Image
                                    image="{design.id}.png"
                                    alt="{design.alt}"
                                    loading="lazy"
                            />
                        {/if}
                    {/each}
                </div>
            </div>

        </section>
    </div>

</main>
