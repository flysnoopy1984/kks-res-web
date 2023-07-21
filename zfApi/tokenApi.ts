import zfhttp from "@/utils/zfhttp";
const apiToken =  class tokenApi extends zfhttp{

    public createToken(openId:string) {

        return this.options("/token/create2",
            JSON.stringify({"openId":openId}),
            {"content-Type": "application/json"}
              
        );
    
    }
} 

export default new apiToken;