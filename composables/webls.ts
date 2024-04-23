//State Key 管理
export const lsKeys = {
    userToken :"userToken",
    userOpenId :"userOpenId",
    userTokenExpireDate:"userTokenExpireDate",
    userInfo :"userInfo",
    pageCommData :"pageCommData",
    lastPage:"lastPage",
    eventCalendarList:"eventCalendarList"

}

export const lsSave2Local = (key:string,json:string)=>{
    try {
        const lsValue = JSON.stringify(json);

      //  localStorage.setItem(key, lsValue)

        console.log("设置${key}的LocalStorage,值:", lsValue);
       // useApiToken().value = lsValue;
      

    } catch (error) {
        console.log("在设置${key}的数据时出现错误", error);
    }
}
