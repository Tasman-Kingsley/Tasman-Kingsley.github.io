<script>
    import { fly } from 'svelte/transition';

    window.scrollTo(0, 0);
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <img src="/images/giddy-grocery.jpg">

    <div class="grid-content">
        <h2>Giddy Grocery - online grocery store</h2>
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span>
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span>
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

    <img src="/images/portfolio.jpg">

    <div class="grid-content">
        <h2>This portfolio website</h2>
        <span><a href="https://tasmankingsley.github.io/">Web link</a></span>
        <span><a href="https://github.com/tasmankingsley/tasmankingsley.github.io">Github repo</a></span>
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

    <img src="/images/car-rental.jpg">

    <div class="grid-content">
        <h2>Car rental fake business</h2>
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span>
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span>
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
    row-gap: 10px;
    place-items: center;
}

@media (min-width: 750px) {
    .grid {
        row-gap: 20px;
    }
}

@media (min-width: 950px) {
    .grid {
        grid-template-columns: 5fr 3fr;
        row-gap: 80px;
    }
    .grid-content {
        margin-right: 15%;
    }
}

img {
    max-width: 100%;
    border-radius: 10px;
    vertical-align: middle;
}
</style>