import type {wxLogin, wxUserInfo} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiWx =  class apiWx extends zfhttp{
    public login(code:string,state:string){

        return  this.options<wxLogin>("/wx/login",
                    {
                        "params":
                        {
                            "code": code,
                            "state": state 
                        }
                    });
    
    }

    public getUserInfo(){
        return this.get<wxUserInfo>("/wx/userinfo");
    }


}

export default new apiWx;
