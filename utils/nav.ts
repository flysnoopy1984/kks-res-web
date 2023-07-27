export class nav{

    static async toHome(){
        await navigateTo({ path: '/' },{
            replace:true
        })
    }

    static async toWxLogin(){
        await navigateTo("/wx/login",{
            replace:true
        })
    }

    static async tojsTest(){
        await navigateTo("/my/jsTest",{
            replace:true
        })
    }


    static async toPerson(){
       await navigateTo("/person/"+ useApiToken().value.openId);
    }
}