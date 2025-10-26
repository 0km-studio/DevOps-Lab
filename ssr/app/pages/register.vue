<script setup lang="ts">
definePageMeta({
    layout: 'auth',
});

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

async function register() {
    try {
        await $fetch('/api/auth/register', {
            method: 'POST',
            body: { name: name.value, email: email.value, password: password.value },
            credentials: 'include'
        });
        alert('Register success! Please login.');
        router.push('/login');
    } catch (err: any) {
        alert(err?.data?.statusMessage || 'Registration failed');
    }
}
</script>

<template>
    <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
    <form @submit.prevent="register">
        <div class="mb-4">
            <label class="block mb-1">Name</label>
            <input v-model="name" type="text" class="w-full border px-2 py-1" required />
        </div>
        <div class="mb-4">
            <label class="block mb-1">Email</label>
            <input v-model="email" type="email" class="w-full border px-2 py-1" required />
        </div>
        <div class="mb-4">
            <label class="block mb-1">Password</label>
            <input v-model="password" type="password" class="w-full border px-2 py-1" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </form>
    <p class="mt-4 text-center">
        Already have an account? <NuxtLink to="/login" class="text-blue-500">Login</NuxtLink>
    </p>
</template>