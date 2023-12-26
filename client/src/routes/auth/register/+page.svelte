<script lang="ts">
	interface Form {
		errors: string[];
		data: {
			username?: string;
			email?: string;
			password?: string;
		};
	}
	export let form: Form;
    console.log(form)
</script>

<form action="" method="post">
	<input name="username" type="text" placeholder="Username" />
	<input name="email" type="text" placeholder="Email" />
	<input name="password" type="password" placeholder="Password" />
	<button type="submit">Sign Up</button>

	{#if form}
		{#each form.errors as error}
			<p>{error}</p>
		{/each}
	{/if}
</form>

