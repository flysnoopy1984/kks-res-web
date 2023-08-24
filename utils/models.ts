/* 用户 */
export interface userToken{
    token:any,
    openId:any,
    expireDate?:any
}

export interface wxUserInfo {
    openid?:string,
    nickname?:string,
    sex?:string,
    province?:string,
    country?:string,
    city?:string,
    unionid?:string,
    headimgurl?:string,
  }

export interface userInfo{
    openId:string,
    account:string,
    nickName:string,
    mobilePhone:string,
    qq:string,
    sex:string,
    province:string,
    city:string,
    headImgUrl:string,
    unionId:string,
    regDate:Date,
    lastLogin:Date
}
export interface wxLogin{
    userInfo:userInfo,
    token:userToken
}
/* 页面 Section */
export interface pageCommData{
    pageSection: pageSection[],
    pageSectionEvent:Map<string,pageSectionEvent[]>,
    pageHomePoster:Map<string,pageEventPoster[]>
}

export interface pageSection{
    secName:string,
    secCode:string
}

export interface pageSectionEvent{
    secName:string,
    secCode:string,
    defaultPage:number,
    evCode:string,
    evName:string,
    evType:number,
    ecCode:string,
    ecStartDate:string,
    ecEndDate:string,
    
    //前端添加
    weekDay?:string, //周几
    diffNow:number  //距离今天几天
    selected:boolean//是否选中

}

export interface pageEventPoster{
    id:number,
    title:string,
    des:string,
    author:string,
    sUrl:string,
    lUrl:string,
    defaultEvent:string,
    defaultYear:number
}

// {userToken,userInfo}
