import type {wxLogin} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiTest =  class apiTest extends zfhttp{

    public userLogin(openId:string) {

        return this.options<wxLogin>("/test/login",
            {
                "params":
                {
                    "openId": openId
                }
            }      
        );
    
    }
} 

export default new apiTest;
