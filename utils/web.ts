export class web{
    static showGlobeError(errorMsg:any,code:any){
      if(process.server){
        throw createError({
          statusCode: code,
          message: errorMsg,
        })
      }
      else{
        showError({
          message: errorMsg,
          statusCode: code
        })
      }
    }

    static  checkUserLogin(){
  
      const ui = useUserInfo().value;
      const result =  (ui != null && ui != undefined);
      return result;
    }
    

}

// export function showGlobeError(errorMsg:any,code:any){
//     if(process.server){
//       throw createError({
//         statusCode: code,
//         message: errorMsg,
//       })
//     }
//     else{
//       showError({
//         message: errorMsg,
//         statusCode: code
//       })
//     }
//   }
  
// export function checkUserLogin(){
  
//   const ui = useUserInfo().value;
//   const result =  (ui != null && ui != undefined);
//   return result;
// }

