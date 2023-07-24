

import { useState, useCookie } from "nuxt/app";

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
  const lsVal = "";

  return useState(lsKeys.userToken, () =>  lsVal);

}


