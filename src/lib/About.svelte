<script>
    import { fly } from 'svelte/transition';
    import { dark_mode } from './store.js';

    window.scrollTo(0, 0);
</script>

<div class="content-div" in:fly={{x: -400, duration: 500}}>
    <img src="./images/choco-profile.jpg" alt="">

    <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
        <span style="padding-top: 30px;">About me</span>
        <p>Hello fellow being! My name is Tasman. <br><br>
            I am a Web Developer and Interaction Designer.<br> 
            My journey of becoming a developer/designer has spanned a number of years, but i have really focused and been driven for the past 1-2 years.
            My programming skills are mostly self-taught, although i have completed various programming and design subjects while pursuing a Masters of Interaction Design, and earlier doing a semester in Computer Science (prior to completing my Bachelor's in Biotechology).<br><br>
            Thank you for finding your way to my portfolio page. Be sure to hang around and take a look at my projects if you'd like.<br>
            I appreciate your time and curiosity.<br><br>
            You can contact me at <a href="mailto: tasman.wilcock@gmail.com" style="color: #78b2aa;">tasman.wilcock@gmail.com</a></p><br>

        <span style="padding-top: 30px;">About this website</span>
        <p>This website is my portfolio of web apps, websites, and design projects.<br><br>
            Some notes on the features - for easier navigation:</p>
            <ul><span>⦿</span> The web apps are all displayed within iframes, so you can interact with them without leaving the page.</ul>
            <ul><span>⦿</span> All of the web apps and websites will work on both desktop and mobile devices, so please feel free
            to open anything in a new tab to view them in fullscreen, or view them on your device.</ul> 
            <ul><span>⦿</span> With some of the projects you will notice that the design is slightly different depending on the device, featuring a responsive css design.</ul>
            <ul><span>⦿</span> The design page allows you to click on the images to view them fullpage.</ul>
            <ul><span>⦿</span> There is a light/dark mode for your preference of theme, the toggle is located in the top right corner as the ☯︎ symbol.</ul>

    </div>
</div>

<style>
    .content-div {
        display: grid;
        grid-auto-flow: row;
        row-gap: 35px;
    }

    .card {
        padding: 10px 20px 10px 20px;
        border-radius: 10px;
    }

    img {
        max-width: 200px;
        border-radius: 50%;
        margin: 20px auto auto auto;
    }

    span {
        color: #7e9ec7;
        font-size: 1.5rem;
    }

    @media (min-width: 800px) {
        .content-div {
            margin-left: 20%;
            margin-right: 20%;
        }
    }
</style>