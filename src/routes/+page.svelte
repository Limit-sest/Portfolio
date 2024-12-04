<script>
    import Chip from "./Chip.svelte";
    import ButtonPrimary from "./ButtonPrimary.svelte";
    import ButtonSecondary from "./ButtonSecondary.svelte";
</script>

<div class="p-10">
    <Chip label="Skill"/>
    <ButtonPrimary label="Button" href="https://example.com"/>
    <ButtonSecondary label="Button" href="https://example.com" withIcon="true"/>
</div>
