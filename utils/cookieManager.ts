 
 export interface userToken{
    token:any,
    openId:any,
    expireDate?:any
  }

 export const saveTokenAndOpenId = (userToken:userToken)=>
 {
    useCookie(lsKeys.userToken,{
     maxAge:3600*2
    }).value = userToken.token;
    useCookie(lsKeys.userOpenId).value = userToken.openId;
}