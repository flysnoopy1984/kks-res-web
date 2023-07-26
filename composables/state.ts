


import { useState, useCookie } from "nuxt/app";
import {userToken,userInfo} from '@/utils/models'

export const useUserInfo = () =>{

  const jsonUser = useCookie(lsKeys.userInfo).value;
  let ui:userInfo = {};

  if(jsonUser!=null)
    ui = JSON.parse(jsonUser)
 // const ui:userInfo = JSON.parse()

  return useState(lsKeys.userInfo,()=>ui);
}

 

//apiToken
export const useApiToken = () =>{
 debugger
  const lsVal:userToken ={
      "token":useCookie(lsKeys.userToken).value,
      "openId":useCookie(lsKeys.userOpenId).value
   };

  return useState(lsKeys.userToken, () =>  lsVal);

}


