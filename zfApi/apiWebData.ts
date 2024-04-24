import {pageSectionEvent,pageEventPoster,eventCalendarList} from '@/utils/models'
import zfhttp from '@/utils/zfhttp';

const apiWebData =  class apiWebData extends zfhttp{

    //马上要废弃，内部不计算
    public querySectionEvents(year:number){

        //new :/event/querySectionEvent
        return this.post<pageSectionEvent[]>("/event/querySectionEvent",
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

    //获取日历事件
    public queryEventCalendarList(year:number){

        //new :/event/querySectionEvent
        return this.post<eventCalendarList>("/event/queryCalendarList/"+year,{},
            {"content-Type": "application/json"}   
        );
    }

    public queryHomePoster(evList:string[]){
        return this.post<pageEventPoster[]>("/poster/queryHomePosterByEvents",
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

    /**不包含日历栏目和事件 */
    public queryHomeData(){
        return this.post<pageEventPoster[]>("/homeData",
            { },
            {"content-Type": "application/json"}   
        )
    }

   
}

export default new apiWebData;