import {userToken,userInfo} from './models'

export class cookieManager {

    static quit(){
        useCookie(lsKeys.userToken).value = null;
        useCookie(lsKeys.userOpenId).value = null;
        useCookie(lsKeys.userInfo).value = null;

    }
     //2小时 有效期
    // static saveTokenAndOpenId(userToken:userToken){
        
    //     useCookie(lsKeys.userToken,{
    //         maxAge:3600*2
    //        }).value = userToken.token;
           
    //     useCookie(lsKeys.userOpenId,
    //         {
    //             maxAge:3600*30
    //         }).value = userToken.openId;
         
    // }
    saveToken(userToken:userToken){
          
        useCookie(lsKeys.userToken,{
            maxAge:3600*24
           }).value = userToken.token;

        useCookie(lsKeys.userTokenExpireDate,{
            maxAge:3600*24
           }).value = userToken.expireDate;     
    }

    //10天 有效期
    static saveUserInfo(ui:userInfo){

      const userCookie =   useCookie(lsKeys.userInfo,
        {
            maxAge:3600*24*10
        });

        userCookie.value = JSON.stringify(ui);
          
    }
   
}
 
//  export const saveTokenAndOpenId = (userToken:userToken)=>
//  {
   
// }
