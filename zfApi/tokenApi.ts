import zfhttp from "@/utils/zfhttp";
const apiToken =  class tokenApi extends zfhttp{

    public createToken(openId:string) {

        return this.options("/token/create",{
                params: {"openId":openId}
            }       
        );
    
    }
} 

export default new apiToken;