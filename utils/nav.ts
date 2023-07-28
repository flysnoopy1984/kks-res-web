export class nav{

    static async toHome(){
        return navigateTo({ path: '/' },{
            replace:true
        })
    }

    static async toWxLogin(){
        return navigateTo("/wx/login",{
            replace:true
        })
    }

    static async tojsTest(){
        await navigateTo("/my/jsTest",{
            replace:true
        })
    }


    static async toPerson(){
        return navigateTo("/person/"+ useApiToken().value.openId);
    }
}