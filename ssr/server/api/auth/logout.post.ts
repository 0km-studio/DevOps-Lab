export default defineEventHandler((event) => {
  setCookie(event, 'token', '', { maxAge: 0 });
  return { success: true };
});
