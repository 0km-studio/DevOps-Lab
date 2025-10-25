export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  if (!url.pathname.startsWith("/api/auth-protected")) return;

  const token = getCookie(event, "token");
  if (!token) throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
});
