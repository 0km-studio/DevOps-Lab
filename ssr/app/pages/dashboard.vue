<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome, {{ auth.user.value?.name }}</p>
        <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded mt-4">Logout</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const auth = useAuth();

const router = useRouter();

async function logout() {
    await $fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    router.push('/login');
}
</script>
