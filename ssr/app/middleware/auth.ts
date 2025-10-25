import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
export default defineNuxtRouteMiddleware((to) => {
  const runtimeConfig = useRuntimeConfig()
  const token = useCookie('auth_token').value

  if (!token && to.path !== '/login') {
    return navigateTo('/login')
  }

  if (token && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})
