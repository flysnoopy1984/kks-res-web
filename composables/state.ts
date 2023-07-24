

import { useState, useCookie } from "nuxt/app";

export interface userToken{
  token?:string,
  openId?:string,
  expireDate?:Date
}

export const useInfo = () =>
  useState("userData", () => {
    return {
      username: "张三",
      age: 33,
    };
  });

//apiToken
export const useApiToken = () =>{
  // if (typeof window !== 'undefined'){
  //   const lsVal = localStorage.getItem(lsKeys.userToken);
  // }
  const lsVal:userToken ={};

  return useState(lsKeys.userToken, () =>  lsVal);

}


