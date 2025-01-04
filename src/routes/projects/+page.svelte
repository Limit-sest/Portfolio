<svelte:head>
    <title>All projects • Antonín Kučera</title>
    <meta name="description" content="All projects that Antonín Kučera has created." />
</svelte:head>

<script>
    import HomeIcon from "virtual:icons/lucide/house"
    import ProjectCard from "$lib/ui/ProjectCard.svelte";
    import { projects } from "$lib/data/projects.js";
</script>

<main class="px-4 pt-20 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">

    <div class="flex items-center col-span-2 w-full my-8">
        <a class="flex items-center gap-2 text-nowrap flex-nowrap" aria-label="Go back to homepage" href="../">
            <HomeIcon class="text-fgDim"></HomeIcon>
            <p class="text-xs text-fgDim font-medium">GO BACK</p>
        </a>
        <h2 class="w-full text-center text-fgDim font-display text-3xl">All projects</h2>
    </div>

    {#each projects as project}
        <ProjectCard project={project}></ProjectCard>
    {/each}
</main>
