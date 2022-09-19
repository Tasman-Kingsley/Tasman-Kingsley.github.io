<script>
import { fly } from 'svelte/transition';
import { onMount } from "svelte";
import { dark_mode } from "./store"

window.scrollTo(0, 0);

// transition elements in as they enter view
onMount(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hidden_elements = document.querySelectorAll('.hidden');

    hidden_elements.forEach((el) => observer.observe(el));
    
});
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <a href="https://tasmankingsley.github.io/giddy-grocery/" target="_blank">
        <img src="/images/giddy-grocery.jpg">
    </a>

    <div class="grid-content">
        <h2>Giddy Grocery - online store</h2>

        <div class="link-div">
            <img class="icon" src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a>
            <img class="icon" src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>This website was a project initally built for a university assignment. The project
            had a specification to fulfill including: the use of image maps for the catalogue, 
            a product details section, a functional shopping cart, and a checkout confirmation and order form page.  
        </p>
        <p>For the assignment, the app was built with php and mysql for the backend and database on aws.
            However, i have since re-written the php code in js on the front end accompanied with json instead of
            mysql - in order to more easily host the website on github.
        </p>

        <h3>Technology stack</h3>
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br>
    </div>

    <a href="https://tasmankingsley.github.io/" target="_blank">
        <img class="hidden" src="/images/portfolio.jpg">
    </a>

    <div class="grid-content hidden">
        <h2>This portfolio website</h2>

        <div class="link-div">
            <img class="icon" src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/">Web link</a>
            <img class="icon" src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/tasmankingsley.github.io">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>The website you are currently looking at!</p>
        <p>It hosts my coding and design projects.
            It is a SPA style svelte website. It features a custom sweeping navagation system, responsive grid
            layouts, interactive mobile-style web apps, and a dark/light mode toggle.
        </p>

        <h3>Technology stack</h3>
        <p>This website is built with svelte, js, css, and html. This website utilises a 
            single page app (SPA) design - for the time being.</p><br>
    </div>

    <a href="https://artistwebsite.vercel.app/" target="_blank">
        <img class="hidden" src="/images/artist-website.jpg">
    </a>

    <div class="grid-content hidden">
        <h2>Artist website</h2>

        <div class="link-div">
            <img class="icon" src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://artistwebsite.vercel.app/">Web link</a>
            <img class="icon" src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/artist-website">Github repo</a>
        </div>

        <h3>Description</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam ullam voluptates, itaque nihil repellat ipsa pariatur illo dolorum fugit necessitatibus nobis velit maxime praesentium sed. Modi excepturi sequi officiis!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, aliquam necessitatibus quibusdam illo dicta porro! Sint velit odio corporis nihil laboriosam voluptate quia ad quam ipsa culpa! Fugit, excepturi vero.</p>

        <h3>Technology stack</h3>
        <p>This website is built with nuxt, vue and javascript</p><br>
    </div>

    <a href="https://tasmankingsley.github.io/psuedo-business/" target="_blank">
        <img class="hidden" src="/images/car-rental.jpg">
    </a>

    <div class="grid-content hidden">
        <h2>Car rental - fake business</h2>

        <div class="link-div">
            <img class="icon" src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a>
            <img class="icon" src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>This website is built with javascript, jquery, json, css, and html.</p><br>
    </div>
</div>

<style>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    column-gap: 50px;
    row-gap: 20px;
    place-items: center;
    justify-items: center;
}

h3 {
    color: #7e9ec7;
}

img {
    max-width: 100%;
    border-radius: 10px;
}

.icon {
    width: 20px;
}

.link-div {
    display: grid;
    place-items: left;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 100px 20px 1fr;
    gap: 5px;
    line-height: 20px;
}


@media (min-width: 750px) {
    .grid {
        row-gap: 50px;
    }
}

@media (min-width: 1100px) {
    .grid {
        grid-template-columns: 5fr 3fr;
        row-gap: 180px;
    }
}

</style>