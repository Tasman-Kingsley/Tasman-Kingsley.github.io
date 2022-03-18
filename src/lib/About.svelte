<script>
    import { fly } from 'svelte/transition';
</script>

<div class="content-div" in:fly={{x: -400, duration: 500}}>
    <img src="./images/choco-profile.jpg" alt="">
    <span style="color: #b2c6d3; padding: 20px;">About me</span>
    <p>Hello fellow human! My name is Tasman. <br><br>
    I am an amateur Designer, Developer, and Music Producer.<br><br>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you'd like.<br><br>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br><br>
    You can contact me at <a href="mailto: tasman.kingsley@gmail.com" style="color: #d3c7b8;">tasman.kingsley@gmail.com</a></p>
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
        font-size: 1.3rem;
    }
</style>