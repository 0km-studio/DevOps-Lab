<template>
  <div class="flex h-screen overflow-hidden bg-zinc-950">
    <!-- Sidebar -->
    <aside class="w-64 bg-black border-r border-zinc-800 flex flex-col">
      <!-- Logo -->
      <div class="px-6 py-5">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span class="text-sm font-bold text-black">WR</span>
          </div>
          <span class="text-base font-semibold text-white tracking-tight">WE ARE SAME</span>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-3 py-4 space-y-1">
        <a href="#" class="flex items-center space-x-3 px-3 py-2.5 bg-zinc-800 text-white rounded-lg">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span class="text-sm font-medium">Dashboard</span>
        </a>
        
        <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <span class="text-sm font-medium">Users</span>
        </a>
        
        <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <span class="text-sm font-medium">Analytics</span>
        </a>
        
        <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span class="text-sm font-medium">Reports</span>
        </a>

        <div class="pt-6">
          <div class="px-3 mb-2">
            <span class="text-xs font-semibold text-zinc-500 uppercase tracking-wider">System</span>
          </div>
          
          <a href="#" class="flex items-center space-x-3 px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="text-sm font-medium">Settings</span>
          </a>
        </div>
      </nav>

      <!-- User -->
      <div class="px-3 py-4 border-t border-zinc-800">
        <div class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900 cursor-pointer transition-colors">
          <div class="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-sm font-medium text-white">
            AD
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate">Admin User</p>
            <p class="text-xs text-zinc-500 truncate">admin@0km.studio</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header class="bg-black border-b border-zinc-800">
        <div class="px-8 py-2.5 flex justify-between items-center">
          <div>
            <h1 class="text-xl font-semibold text-white">...</h1>
            <p class="text-sm text-zinc-500 mt-0.5">....</p>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                class="bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-zinc-700 w-64 text-sm"
              />
              <svg class="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            
            <button class="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors relative">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span class="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 overflow-auto bg-zinc-950">
        <div class="p-2">
          <!-- Main Content -->
          <div class="p-8">
            <NuxtPage />
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-black border-t border-zinc-800 px-8 py-4">
        <div class="flex justify-between items-center text-xs text-zinc-500">
          <p>© 2025 0KM STUDIO. All rights reserved.</p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" class="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" class="hover:text-zinc-400 transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #18181b;
}

::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #52525b;
}
</style>