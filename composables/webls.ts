export const lsKeys = {
    userToken :"userToken"
}

export const lsSave2Local = (key:string,json:string)=>{
    try {
        localStorage.setItem(key, JSON.stringify(json))
    } catch (error) {
        console.log(`在设置${key}的数据时出现错误`, error);
    }

}
