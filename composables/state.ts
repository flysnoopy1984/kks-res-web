


import { useState, useCookie } from "nuxt/app";
import {userToken,userInfo} from '@/utils/models'



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


