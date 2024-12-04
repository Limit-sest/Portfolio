<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-bgPrimary">
    {@render children()}
</div>

