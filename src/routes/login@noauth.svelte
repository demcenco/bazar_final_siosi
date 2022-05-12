<script>

	import { post } from '$lib/api';
	let email = 'ostap';
	let password = '123123';
	let errors = null;
	async function submit(event) {
		const response = await post(`auth/login`, { email, password });
		if (response.errors) {
			errors = response.errors;
		}
	}
</script>

<div class="flex flex-col flex-auto items-center justify-center  w-full  max-w-md m-auto">
	<div class="flex flex-col py-8 px-14 space-y-4 bg-base-100 rounded-xl   w-full">
		<div>
			<div class="text-3xl font-bold">Ingresar</div>
			<span class="text-sm">
				<span>No tienes cuenta?</span>

				<a href="/register" class="link link-secondary">Registrarse</a>
			</span>
		</div>
        {#if errors}
            {#each errors as item}
                <div class="text-red-600">
                    - {item}
                </div>
            {/each}
             <!-- content here -->
        {/if}
		<div class="pt-2">
			<form on:submit|preventDefault={submit}>
				<div class="form-control w-full ">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text font-semibold">Nombre de usuario o correo</span>
					</label>
					<input bind:value={email} type="text" class="input input-bordered w-full " />
				</div>
				<div class="form-control w-full ">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text font-semibold">Clave</span>
					</label>
					<input bind:value={password} type="password" class="input input-bordered w-full " />
				</div>
				<div class="flex items-center justify-between  mt-4">
					<div class="form-control">
						<label class="label cursor-pointer">
							<input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
							<span class="label-text pl-4">Recordar me</span>
						</label>
					</div>
					<div>
						<a href="/forgot" class="link text-sm"> Se me olvido la clave </a>
					</div>
				</div>
				<button class="btn btn-accent btn-block rounded-full mt-2" type="submit">Ingresar</button>
			</form>
		</div>
	</div>
</div>
