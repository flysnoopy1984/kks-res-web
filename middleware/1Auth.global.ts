export default defineNuxtRouteMiddleware((to, from) => {

//   $route.params.group
    console.log(to.name);
    if(to.name == "person-openId"){
        if(!checkUserLogin()){
            return nav.toWxLogin();
        }
    }
  })