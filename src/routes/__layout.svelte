<script>
    function closeSideBar() {
        document.getElementById('sidebar').style.width = '0px';
    }

    export function openSideBar() {
        document.getElementById('sidebar').style.width = '250px';
    }

    let headerName = 'TasmanKingsley';

    function toHome() {
        headerName = 'TasmanKingsley';
        closeSideBar();
    }

    function toCode() {
        headerName = 'Tasman/codingProjects';
        closeSideBar();
    }

    function toDesign() {
        headerName = 'Tasman/designProjects';
        closeSideBar();
    }

    function toMusic() {
        headerName = 'Tasman/musicProject';
        closeSideBar();
    }

    function toAbout() {
        headerName = 'Tasman/about';
        closeSideBar();
    }


</script>


<main>
    <div id="sidebar">
        <a href="javascript:void(0)" on:click={closeSideBar} style="font-size: 1.5em; padding: 30px;">✕</a>
        <a href="." on:click={toHome}>Home</a>
        <a href="code" on:click={toCode}>Code</a>
        <a href="design" on:click={toDesign}>Design</a>
        <a href="music" on:click={toMusic}>Music</a>
        <a href="about" on:click={toAbout}>About</a>
    </div>

	<div class="grid">
		<div class="header">
			<span>{headerName}</span>
			<a href="javascript:void(0)" on:click={openSideBar} class="burger">☰</a>
		</div>
	</div>
</main>

<slot></slot>

<style>
    #sidebar {
        z-index: 3;
        width: 0px;
        transition: width 0.5s;
        height: 100%;
        background-color: #6272a4;
        display: grid;
        grid-template-rows: 80px repeat(5, 100px) auto;
        position: fixed;
        right: 0;
        background-image: url("./images/sidebar.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #sidebar a {
        text-align: center;
        text-decoration: none;
        color: #f8f8f2;
        font-size: 20px;
        line-height: 20px;
        padding: 40px;
    }

    #sidebar a:hover {
        color: #282a36;
        background-color: rgba(255, 255, 255, 0.4);
    }
</style>