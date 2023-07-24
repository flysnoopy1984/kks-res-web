import zfhttp from "@/utils/zfhttp";
const apiWx =  class apiWx extends zfhttp{
    public login(code:string,state:string){

        return  this.options("/wx/login",
                    {
                        "params":
                        {
                            "code": code,
                            "state": state 
                        }
                    });
    
    }

    public getUserInfo(){
        return this.get("/wx/userinfo");
    }
}

export default new apiWx;