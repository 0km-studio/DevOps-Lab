<script setup lang="ts">
import { ref } from 'vue';
const auth = useAuth();

definePageMeta({
    middleware: ['auth'],
    layout: 'auth',
});

const email = ref('');
const password = ref('');

interface IUser {
    _id: string;
    name: string;
    email: string;
}

interface ILoginResponse {
    success: boolean;
    token: string;
    user: IUser;
}


async function login() {
    try {
        const res = await $fetch<ILoginResponse>('/api/auth/login', {
            method: 'POST',
            body: { email: email.value, password: password.value },
            credentials: 'include',
        });

        alert('Login success!');
        console.log(res)
        auth.setAuth({
            token: res.token,
            user: res.user,
        });
        return navigateTo('/dashboard');
    } catch (err: any) {
        alert(err?.data?.statusMessage || 'Login failed');
    }
}
</script>

<template>
    <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
    <form @submit.prevent="login">
        <div class="mb-4">
            <label class="block mb-1">Email</label>
            <input v-model="email" type="email" class="w-full border px-2 py-1" required />
        </div>
        <div class="mb-4">
            <label class="block mb-1">Password</label>
            <input v-model="password" type="password" class="w-full border px-2 py-1" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
    <p class="mt-4 text-center">
        Don't have an account? <NuxtLink to="/register" class="text-blue-500">Register</NuxtLink>
    </p>
</template>
