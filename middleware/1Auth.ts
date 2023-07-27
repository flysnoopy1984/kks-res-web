export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
    debugger
    console.log(to);
    if(to.params.group == "person"){
        console.log("come to person");
        if(!checkUserLogin()){
            nav.toWxLogin();
        }
    }
  })