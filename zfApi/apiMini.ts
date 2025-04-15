
import zfhttp from '@/utils/zfhttp';
import type {resultGenSchemeVo,resultUrlLinkVo} from '@/utils/models'

const apiMini =  class apiMini extends zfhttp{
    public genUrlScheme(req:any){
        return this.post<resultGenSchemeVo>("/mini/genUrlScheme",{
            "body":req
        });
     
    }

    public genUrlUrl(req:any){
        return this.post<resultUrlLinkVo>("/mini/genUrlLink",{
            "body":req
        });
     
    }


}

export default new apiMini;
