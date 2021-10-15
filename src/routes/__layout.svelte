<script>
    import { fade, fly } from 'svelte/transition';
    
    $: visible = false;

    function open() {
        visible = true;
    }

    function close() {
        visible = false;
    }

</script>

{#if visible}
    <div id="sidebar" in:fly="{{ y: 400, duration: 500 }}" out:fly="{{ y: 400, duration: 500 }}">
        <a href="javascript:void(0)" on:click={close}>✕</a>
        <a href="/" on:click={close}>Home</a>
        <a href="/about" on:click={close}>About</a>
        <a href="/projects" on:click={close}>Projects</a>
        <a href="/contact" on:click={close}>Contact</a>
    </div>
{/if }

<div class="title">
    <span>Tasman Kingsley</span>
    <div id="burger">
        <a href="javascript:void(0)" on:click={open}>☰</a>
    </div>
</div>







<slot></slot>

<style>
    span {
        font-size: 1.5rem;
        text-align: center;
        width: 100vw;
        padding: 1em;
    }
    .title {
        display: flex;
        justify-content: center;
    }
    #sidebar {
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        text-align: center;
        position: fixed;
        height: 100vh;
        width: 100vw;
        background-color: white;
        z-index: 2;
    }

    #sidebar a {
        text-decoration: none;
        color: black;
        padding: 2em;
        font-size: 1.5rem;
        border-bottom: 1px solid black;
    }

    #sidebar a:hover {
        color: cornflowerblue;
        background-color: linen;
    }

    #burger {
        position: fixed;
        top: 2em;
        z-index: 1;
        text-decoration: none;
        color: black;
        padding: 1.5em 0em;
        width: 100vw;
        text-align: center;
    }

    #burger a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        opacity: 0.5;
    }

    #burger a:hover {
        color: cornflowerblue;
        opacity: 1;
    }
</style>