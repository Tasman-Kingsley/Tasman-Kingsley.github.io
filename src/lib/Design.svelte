<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{x: -400, duration: 500}}>
    <img class="persona" src="./persona-final.png" alt="">
</div>

<style>
div {
    display: grid;
    grid-auto-flow: row;
}
img {
    width: 100%;
    margin: auto;
}
</style>