<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{x: -400, duration: 500}}>
    <iframe src="https://tasmankingsley.github.io/podcast-app/"
    width="350" height="650"></iframe>

    <iframe src="https://tasmankingsley.github.io/todo/"
    width="350" height="650"></iframe>
</div>

<style>
    iframe {
        border: 2px solid white;
        border-radius: 20px;
    }
</style>