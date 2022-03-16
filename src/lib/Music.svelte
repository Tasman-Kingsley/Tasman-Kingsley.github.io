<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{x: -400, duration: 500}}>
    <img id="profile" src="src/assets/spotify-profile.jpg" alt="">
    <p>Artist - Tasman Kingsley</p>
    <iframe src="https://open.spotify.com/embed/artist/761DscW9vfSQMmnKEJNHbH"
    width="350" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</div>

<style>
div {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 80px 1fr;
    margin: auto;
}

p {
    margin: auto;
}

img {
    max-width: 200px;
    border-radius: 5%;
    margin: auto;
}

</style>