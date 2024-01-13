<script lang="ts">
	import Table from '$lib/components/Table.svelte';

	export let data;
</script>

<div class="flex w-full p-4">
	<div class="w-full">
		<div class="mb-4 flex items-center">
			<button></button>
		</div>
		<Table trades={data.trades} />
	</div>
</div>
