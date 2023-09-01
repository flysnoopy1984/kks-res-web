import {pageEventPoster} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiPoster =  class apiPoster extends zfhttp{

    public querySectionEvents(evCode:string,topNum:number){

        return this.post<pageEventPoster[]>("/poster/queryList",
            {
                "body":JSON.stringify(
                    {
                        "eventCode":evCode,
                        "topNum":topNum,
                        "showType":1
                    }
                )
            },
            {"content-Type": "application/json"}   
        );
    }

}

export default new apiPoster;