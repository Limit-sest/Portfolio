<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="bg-bgDim h-12 w-full flex justify-between items-center px-4 font-display font-bold text-sm md:text-base text-fgDim">
    <p>Antonín Kučera</p>
</header>

<div class="bg-bg">
    {@render children()}
</div>

