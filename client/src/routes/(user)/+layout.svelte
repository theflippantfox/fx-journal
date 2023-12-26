<div class="flex flex-col h-screen w-screen bg-neutral-900 text-lsm text-white">
	<nav class="bg-neutral-900 h-12 w-full flex items-center justify-between px-4 border-b-neutral-600">
        <div class="icon opacity-0 md:opacity-100">
            Icon
        </div>
        <ul class="flex">
            <a class="font-bold mx-2 py-4 px-2 hover:bg-neutral-600 cursor-pointer" href="/home">Home</a>
            <a class="font-bold mx-2 py-4 px-2 hover:bg-neutral-600 cursor-pointer" href="/trades">Trades</a>
            <a class="font-bold mx-2 py-4 px-2 hover:bg-neutral-600 cursor-pointer" href="/stats">Stats</a>
        </ul>
    </nav>
    <slot />
</div>

