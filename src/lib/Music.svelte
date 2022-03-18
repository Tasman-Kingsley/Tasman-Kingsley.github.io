<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{x: -400, duration: 500}}>
    <img id="profile" src="./images/spotify-profile.jpg" alt="">
    <p>Artist - Tasman Kingsley</p>
    <iframe src="https://open.spotify.com/embed/artist/761DscW9vfSQMmnKEJNHbH"
     frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</div>

<style>
div {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 80px 1fr;
}

p {
    margin: auto;
}

img {
    max-width: 200px;
    border-radius: 5%;
    margin: 20px auto auto auto;
}

iframe {
    width: 350px; 
    height: 200px;
    transition: width 1s;
}

@media (min-width: 750px) {
    iframe {
        width: 600px;
    }
}

</style>