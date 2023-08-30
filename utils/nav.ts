export class nav{

    static async toHome(){
        return navigateTo({ path: '/' },{
            replace:false
        })
    }

    static async toWxLogin(){
        return navigateTo("/wx/login",{
            replace:false
        })
    }

    static async toLogOut(){
        return navigateTo("/logout",{
            replace:false
        })
    }

    // static async tojsTest(){
    //     await navigateTo("/my/jsTest",{
    //         replace:true
    //     })
    // }


    static async toPerson(){
        return navigateTo("/person/"+ useApiToken().value.openId);
    }
}