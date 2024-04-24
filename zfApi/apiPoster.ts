import {pageEventPoster} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiPoster =  class apiPoster extends zfhttp{

    public queryPosterByEvCode(evCode:string,pageIndex:number,pageSize:number){

        return this.post<pageEventPoster[]>("/poster/queryListByEvCode",
            {
                "body":JSON.stringify(
                    {
                        "eventCode":evCode,
                        "needMiniQr":true,
                        "pageIndex":pageIndex,
                        "pageSize":pageSize,
                    }
                )
            },
            {"content-Type": "application/json"}   
        );
    }

}

export default new apiPoster;