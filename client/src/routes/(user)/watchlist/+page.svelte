<script lang="ts">
	export let data;
</script>

<div class="p-4">
	{#if data.watchlist != undefined}
		{#each data.watchlist as item}
			{item.name}
		{:else}
			<!-- empty list -->
		{/each}
	{/if}

	<form method="post">
		<input type="text" placeholder="Name" class="rounded border px-2 py-1 text-black" />
		<button type="submit" class="rounded border px-2 py-1">Add</button>
	</form>
</div>
