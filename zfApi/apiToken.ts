import {userToken} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiToken =  class apiToken extends zfhttp{

    public createToken(openId:string) {

        return this.options<userToken>("/token/create",
            {
                "body":JSON.stringify({"openId":openId})
            },
            {"content-Type": "application/json"}             
        );
    
    }
} 

export default new apiToken;