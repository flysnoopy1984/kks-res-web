export function showGlobeError(errorMsg:any,code:any){
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
  
export function checkUserLogin(){
  const ui = useUserInfo().value;
  return (ui != null && ui != undefined)
}

