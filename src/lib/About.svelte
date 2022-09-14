<script>
    import { fly } from 'svelte/transition';
</script>

<div class="content-div" in:fly={{x: -400, duration: 500}}>
    <img src="./images/choco-profile.jpg" alt="">
    <span style="color: #7e9ec7; padding: 20px;">About me</span>
    <p>Hello fellow human! My name is Tasman. <br><br>
    I am a Web Developer and Interaction Designer.<br>
    I am mostly self-taught, although i have completed various programming and design subjects throughout my university education too.<br><br>
    Thank you for finding your way to my portfolio page. Be sure to hang around and take a look at my projects if you'd like.<br>
    I appreciate your time and curiosity.<br><br>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #78b2aa;">tasmankingsley@gmail.com</a></p>
</div>

<style>
    .content-div {
        display: grid;
        grid-auto-flow: row;
    }

    img {
        max-width: 200px;
        border-radius: 50%;
        margin: 20px auto auto auto;
    }

    p {
        margin: auto;
    }

    span {
        margin: auto;
        font-size: 1.5rem;
    }
</style>