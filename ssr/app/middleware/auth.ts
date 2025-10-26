export default defineNuxtRouteMiddleware(async (to) => {
  const isAuthRoute = ['/login', '/register'].includes(to.path);
  
  if (isAuthRoute && to.query.skipCheck) {
    return;
  }

  try {
    await $fetch('/api/auth/me', {
      credentials: 'include',
      headers: useRequestHeaders(['cookie'])
    });

    if (isAuthRoute) return navigateTo('/dashboard');
  } catch {
    if (!isAuthRoute) return navigateTo('/login');
  }
});