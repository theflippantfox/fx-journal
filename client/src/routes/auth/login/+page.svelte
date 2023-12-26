<script lang="ts">
	interface Form {
		errors?: string[];
		data: {
			username?: string;
			password?: string;
		};
	}
	export let form: Form;
	console.log(form);
</script>

<form action="" method="post" class="flex w-60 flex-col p-2">
	<input
		name="username"
		type="text"
		placeholder="Username"
		class="m-1 rounded border-blue-600 py-1"
	/>
	<input
		name="password"
		type="password"
		placeholder="Password"
		class="m-1 rounded border-b-blue-600 py-1"
	/>
	<button type="submit" class="rounded border-gray-600 bg-gray-800 py-1 text-white">Sign In</button>
	{#if form && form.errors}
		{#each form.errors as error}
			<p>{error}</p>
		{/each}
	{/if}
</form>
