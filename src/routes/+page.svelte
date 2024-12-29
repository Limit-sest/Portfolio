<script>
    import ButtonOutline from "$lib/ui/ButtonOutline.svelte";
    import ButtonLinktree from "$lib/ui/ButtonLinktree.svelte";
    import ArrowDown from "virtual:icons/lucide/arrow-down"
    import PersonalCard from "$lib/ui/PersonalCard.svelte";

</script>

<main class="p-4 flex flex-col gap-4 md:gap-6 max-w-3xl mx-auto">
    <section class="relative flex flex-col items-center w-full my-32">
        <p class="font-display text-3xl md:text-4xl text-fgDim mb-2 z-20 mt-4">Hello! I'm</p>
        <h1 class="font-display font-bold text-4xl md:text-7xl text-fg mb-6 z-20">Antonín Kučera</h1>
        <p class="font-sans font-semibold text-center text-base md:text-lg text-fgDim z-20 max-w-md mb-4">I’m a designer and programmer that enjoys making creative things. I currently study cybersecurity in Czechia.</p>
        <div class="absolute top-0 left-0 bg-accent/20 z-10 w-full h-full blur-3xl"></div>
    </section>

    <ArrowDown class="w-10 h-10 text-fgDim mx-auto" />

    <section>
        <h2 class="font-display font-medium text-3xl md:text-6xl text-fg mb-6">Programming projects</h2>
        <PersonalCard></PersonalCard>

    </section>

</main>
