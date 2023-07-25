


import { useState, useCookie } from "nuxt/app";

export interface userToken{
  token:any,
  openId:any,
  expireDate?:any
}
export interface userInfo {
  openid?:string,
  nickname?:string,
  sex?:string,
  province?:string,
  country?:string,
  city?:string,
  unionid?:string,
  headimgurl?:string,
}

export const useUserInfo = () =>{
  const ui:userInfo ={};

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


