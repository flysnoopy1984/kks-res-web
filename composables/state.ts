import { useState, useCookie } from "nuxt/app";
import {userToken,userInfo,pageCommData,pageSectionEvent} from '@/utils/models'

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

//pageCommData
export const usePageCommData = ()=>{
  let cd:pageCommData = {
    pageSection:[],
    pageSectionEvent:new Map<string,pageSectionEvent[]>(),
  };
  
  return useState<pageCommData>(lsKeys.pageCommData, () => {
      return cd;
  });
}



