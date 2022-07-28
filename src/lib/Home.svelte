<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{x: -400, duration: 500}}>
    <p>Hello, Tasman here. This is my portfolio page.</p>
    <p>Feel free to potter about and peruse my projects if you feel like it 😁</p>

    <!-- <iframe src="https://tasmankingsley.github.io/tetris/"
    width="380" height="630" style=""></iframe> -->
    <iframe src="https://tasmankingsley.github.io/cube-three/" width="400" height="400"></iframe>
</div>

<style>
div {
    display: grid;
    grid-auto-flow: row;
}
iframe {
    border-radius: 50%; 
    border: none;
    margin: auto;
    margin-top: 80px;
}
</style>
