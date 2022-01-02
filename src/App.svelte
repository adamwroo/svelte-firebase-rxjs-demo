<script>
	import Login from './Login.svelte';
	export let name;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
</svelte:head>

<main>
	<h1>Welcome to {name}</h1>
	<Login />
</main>

<style>
	h1 {
		color: purple;
	}

	main {
		margin: 20px;;
	}
</style>