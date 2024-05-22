export default defineNuxtRouteMiddleware((to, from) => {

    if(to.path == "/wx/login" || to.path == "/login" || to.path=="/mini/tokks") return;

   
  })