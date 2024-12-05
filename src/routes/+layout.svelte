<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="bg-bgSecondary border-border border-t md:border-b  h-12 w-full flex justify-between items-center px-4 font-display font-bold text-sm md:text-base text-text">
    <p>Antonín Kučera</p>
</header>

<div class="bg-bgPrimary">
    {@render children()}
</div>

