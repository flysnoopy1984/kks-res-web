import {pageEventPoster} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiPoster =  class apiPoster extends zfhttp{

    public querySectionEvents(evCode:string,pageIndex:number,pageSize:number){

        return this.post<pageEventPoster[]>("/poster/queryListByEvCode",
            {
                "body":JSON.stringify(
                    {
                        "eventCode":evCode,
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