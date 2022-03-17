<script>
    import { fly } from 'svelte/transition';
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <img class="persona" src="./persona-final.png" alt="">
    <div class="grid-content">
        <h2>this project is blah blah..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>
</div>



<style>
.grid {
    display: grid;
    grid-auto-flow: row;
    row-gap: 20px;
}
img {
    width: 100%;
    margin: auto;
    transition: width 1s;
}

@media (min-width: 950px) {
    img {
        width: 80%;
    }
}
</style>