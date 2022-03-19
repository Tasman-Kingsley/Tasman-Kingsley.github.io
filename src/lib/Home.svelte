<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{x: -400, duration: 500}}>
    <p>Hello, Tasman here. <br> This is my portfolio page.</p>
    <p>Feel free to potter about, <br> and check out some of my projects if you fancy 😄</p>

    <!-- <iframe src="https://tasmankingsley.github.io/tetris/"
    width="380" height="630" style=""></iframe> -->
    <!-- <iframe src="https://tasmankingsley.github.io/cube-three/" width="400" height="400"></iframe> -->
</div>

<style>
div {
    display: grid;
    grid-auto-flow: row;
}
iframe {
    border-radius: 15px; 
    border: none;
    margin: auto;
}
</style>
