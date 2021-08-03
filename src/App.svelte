<script>
	import SideBar, {openSideBar} from './SideBar.svelte';
	import {navOptions} from './SideBar.svelte';
	import Home from './Home.svelte';
	import Code from './Code.svelte';
	import Design from './Design.svelte';
	import Music from './Music.svelte';
	import About from './About.svelte';

	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
</script>

<main>
	<SideBar/>

	<div class="grid">
		<div class="header">
			<span>TasmanKingsley</span>
			<a href="javascript:void(0)" on:click={openSideBar} class="burger">☰</a>
		</div>
	</div>

	<Home/>
	<Code/>
	<Design/>
	<Music/>
	<About/>

</main>

<style>
	main {
		max-width: 240px;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>