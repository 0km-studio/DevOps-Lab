<template>
    <header class="bg-black border-b border-zinc-800">
        <div class="px-8 py-2.5 flex justify-between items-center">
            <div>
                <h1 class="text-xl font-semibold text-white">...</h1>
                <p class="text-sm text-zinc-500 mt-0.5">....</p>
            </div>

            <div class="flex items-center space-x-3">
                <div class="relative">
                    <input type="text" placeholder="Search..."
                        class="bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-zinc-700 w-64 text-sm" />
                    <svg class="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>

                <button
                    class="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors relative">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                        </path>
                    </svg>
                    <span class="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                </button>
            </div>
        </div>
    </header>
</template>