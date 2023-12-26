<script lang="ts">
	export let trades: any[];
</script>

<table class="w-full">
	<thead class="border-b border-white">
		<tr>
			<th class="p-4"><input type="checkbox" /></th>
			<th class="p-4">Pair</th>
			<th class="p-4">Date</th>
			<th class="p-4">Direction</th>
			<th class="p-4">Setup</th>
			<th class="p-4">Risk</th>
			<th class="p-4">Size</th>
			<th class="p-4">Entry</th>
			<th class="p-4">Exit</th>
			<th class="p-4">Gross PnL</th>
			<th class="p-4">Comission</th>
			<th class="p-4">Net PnL</th>
			<th class="p-4">RoI</th>
			<th class="p-4">Chart</th>
		</tr>
	</thead>
	{#each trades as trade}
		<tr class="border-b border-white" id={trade.id}>
			<td class="items-center justify-center p-4"><input type="checkbox" id={trade.id} /></td>
			<td class="items-center p-4">{trade.pair}</td>
			<td class="p-4">{trade.date}</td>
			<td class="p-4">{trade.direction}</td>
			<td class="p-4">{trade.setup}</td>
			<td class="p-4">{trade.risk}</td>
			<td class="p-4">{trade.size}</td>
			<td class="p-4">{trade.entry}</td>
			<td class="p-4">{trade.exit}</td>
			<td class="p-4">{trade.gross_pnl}</td>
			<td class="p-4">{trade.comission}</td>
			<td class="p-4">{trade.net_pnl}</td>
			<td class="p-4">{trade.roi}</td>
			<td class="p-4">{trade.chart}</td>
			<td
				class="flex cursor-pointer items-center justify-center bg-neutral-800 p-4 opacity-0 hover:opacity-100"
				><i class="fa-solid fa-ellipsis-vertical"></i></td
			>
		</tr>
	{/each}
</table>
