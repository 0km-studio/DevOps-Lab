<script>
import Header from '~/components/Header.vue';
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';
</script>
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
      <Navigation />

      <!-- User -->
      <div class="px-3 py-4 border-t border-zinc-800">
        <div
          class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-zinc-900 cursor-pointer transition-colors">
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
      <Header />

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
      <Footer />
    </div>
  </div>
</template>