<script>
	import '../app.css';
	import NavBarNoAuth from '$lib/components/_NavBarNoAuth.svelte';
</script>

<div class="flex flex-col h-screen bg-base-100">
	<NavBarNoAuth />
	<div class="flex flex-col flex-auto bg-base-300 p-6">
		<slot />
	</div>
</div>
