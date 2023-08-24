import {pageSectionEvent,pageEventPoster} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiWebData =  class apiWebData extends zfhttp{

    public querySectionEvents(year:number){

        return this.post<pageSectionEvent[]>("/section/query",
            {
                "body":JSON.stringify(
                    {
                        "eventYear":year,
                        "defaultPage":1
                    }
                )
            },
            {"content-Type": "application/json"}   
        );
    }

    public queryHomePoster(evList:[]){
        return this.post<pageEventPoster[]>("/poster/queryHomeByEvents",
            {
                "body":JSON.stringify(
                    {
                        "eventCodes":evList,
                        "topNum":20
                    }
                )
            },
            {"content-Type": "application/json"}   
        )
    }
}

export default new apiWebData;