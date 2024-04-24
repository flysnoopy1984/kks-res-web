import { useState, useCookie } from "nuxt/app";
import { hash } from "ohash";

import {userToken,userInfo,pageSectionData,eventCalendarList} from '@/utils/models'

//userInfo
export const useUserInfo = () =>{

    const ui = useCookie<userInfo>(lsKeys.userInfo);

    return useState(lsKeys.userInfo,()=>ui);
  } 

//apiToken
export const useApiToken = () =>{

  const lsVal:userToken ={
      "token":useCookie(lsKeys.userToken).value,
      "openId":useCookie(lsKeys.userOpenId).value
   };

  return useState(lsKeys.userToken, () =>  lsVal);
}

// // //pageCommData
// export const usePageCommData = ()=>{
//   let cd:pageCommData = {
//     // pageSectionData:[] as pageSectionData[],

//     pageSectionEvent:new Map<string,pageSectionEvent[]>(),
//     pageEventPoster:new Map<string,pageEventPoster[]>(),
//     curCalendarEventIndex : -1,
//   };
  
//   return useState<pageCommData>(lsKeys.pageCommData, () => {
//       return cd;
//   });
// }

export const useEventCalendarList=()=>{

  return useState<eventCalendarList>(lsKeys.eventCalendarList,()=>{
      const data:eventCalendarList = {
        currentEventIndex:-1,
        calendarEventList:[]
      }
      return data;
  })
}

export const useSectionData=()=>{
  return useState<pageSectionData[]>(lsKeys.sectionData,()=>{
    return [];
  })
}

export const usePosterData=()=>{
    const h = hash({});
    useState(lsKeys.posterDataByEvent,()=>{
      return h;
    })

}



