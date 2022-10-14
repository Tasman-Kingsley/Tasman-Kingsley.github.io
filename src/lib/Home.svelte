<script>
import { nav, title } from './store.js';
import { fly } from 'svelte/transition';
import card_1 from '../assets/apps.jpg';
import card_2 from '../assets/giddy-grocery.jpg';
import card_3 from '../assets/persona-collage.jpg';
import card_4 from '../assets/waves.jpeg';

window.scrollTo(0, 0);


function toggle(num) {
  for (let i = 1; i < $nav.length - 1; i++) {
    $nav[i].visible = false;
  }
  $nav[num].visible = true;
  $title = $nav[num].name;
}
</script>

<div class="outer-grid" in:fly={{x: -400, duration: 500}}>
    <div>
        <p>Hello, Tasman here. This is my portfolio page. <br>
            Please feel free to browse my projects if you like 😊
        </p>
    </div>


    <div class="inner-grid">
        <div class="img" style="background-image: url({card_1})" on:click={() => toggle(2)}>
            <div class="card-txt"><span>Web apps</span></div>
        </div>
        <div class="img" style="background-image: url({card_2})" on:click={() => toggle(3)}>
            <div class="card-txt"><span>Websites</span></div>
        </div>
        <div class="img" style="background-image: url({card_3})" on:click={() => toggle(4)}>
            <div class="card-txt"><span>Design porfolio</span></div>
        </div>
        <div class="img" style="background-image: url({card_4})" on:click={() => toggle(6)}>
            <div class="card-txt"><span>About</span></div>
        </div>
    </div>

</div>

<style>
.outer-grid {
    display: grid;
    grid-auto-flow: row;
    height: 100%;
    width: 100%;
    text-align: center;
    row-gap: 20px;
}

p {
    /* font-size: 1rem; */
}

.inner-grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: 20px;
    place-items: center;
}

.img {
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #191a21;
    width: 100%;
    height: 200px;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.5s;
}

.img:hover {
    opacity: 1;
}

.card-txt:hover {
    opacity: 1;
}

.card-txt {
    font-size: 2.3rem;
    font-weight: 200;
    opacity: 1;
    height: 100%;
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    transition: all 0.5s;
}

span {
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    opacity: 0.9;
}

@media (min-width: 700px) {
    .inner-grid {
        grid-template-columns: 1fr 1fr;
    }
    .img {
        height: 300px;
    }

    .img:hover {
        padding: 0px 5px;
        border-radius: 20px;
    }
}

</style>
