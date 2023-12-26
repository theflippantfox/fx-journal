<script lang="ts">
	import Table from '$lib/components/Table.svelte';

	const trades = [
		{
			id: 1,
			pair: 'XAUUSD',
			date: Date.now().toLocaleString(),
			direction: 'LONG',
			setup: ['FVG', 'BB'],
			risk: 1,
			size: 0.04,
			entry: 1232,
			exit: 2321,
			gross_pnl: 32.4,
			comission: 0,
			net_pnl: 32.4,
			roi: 1,
			chart: 'url'
		},
		{
			id: 2,
			pair: 'XAUUSD',
			date: Date.now().toLocaleString(),
			direction: 'LONG',
			setup: ['FVG', 'BB'],
			risk: 1,
			size: 0.04,
			entry: 1232,
			exit: 2321,
			gross_pnl: 32.4,
			comission: 0,
			net_pnl: 32.4,
			roi: 1,
			chart: 'url'
		}
	];

	interface Filter {
		id?: number | string;
		pair?: string;
		date?: string | Date;
		direction?: 'LONG' | 'SHORT';
		setup?: string[];
		risk?: number;
		size?: number;
		entry?: number;
		exit?: number;
		gross_pnl?: number;
		comission?: number;
		net_pnl?: number;
		roi?: number;
		chart?: string;
	}

	const filter: Filter = { pair: "XAUUSD" };

	const filterTrades = (): typeof trades | [] => {
		let filteredTrades: typeof trades = [];

		if (typeof filter == typeof {  }) {
			return trades;
		}

		if (filter) {
			filteredTrades = trades.filter((trade) => {
				if (trade.pair === filter.pair) {
					return trade;
				}
			});
		}
		return filteredTrades;
	};
</script>

<div class="flex w-full p-4">
	<div class="w-full">
		<div class="mb-4 flex items-center">
            <button></button>
		</div>
		<Table trades={filterTrades()} />
	</div>
</div>
