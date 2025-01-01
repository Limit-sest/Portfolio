<script>
    import ArrowDown from "virtual:icons/lucide/arrow-down"
    import PersonalCard from "$lib/ui/PersonalCard.svelte";
    import ProjectCard from "$lib/ui/ProjectCard.svelte";
    import { projects } from "$lib/data/projects.js";

</script>

<main class="px-4 pt-20 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
    <h2 class="col-span-2 text-center text-fgDim font-display text-3xl my-8">Welcome to my portfolio!</h2>

    <section aria-label="About me" class="w-full relative">
        <PersonalCard></PersonalCard>
    </section>

    <section aria-label="My projects" class="w-full">
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>
        <ProjectCard project={projects[0]}></ProjectCard>

    </section>

</main>
