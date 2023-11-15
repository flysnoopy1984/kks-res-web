export default defineNuxtRouteMiddleware((to, from) => {

    if(to.path == "/wx/login" || to.path == "/login") return;

   
  })