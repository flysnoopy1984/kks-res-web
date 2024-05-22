
import zfhttp from '@/utils/zfhttp';
import {resultGenSchemeVo} from '@/utils/models'

const apiMini =  class apiMini extends zfhttp{
    public genUrlScheme(req:any){
        return this.post<resultGenSchemeVo>("/mini/genUrlScheme",{
            "body":req
        });
     
    }



}

export default new apiMini;