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
/* 首页数据 */
export interface pageCommData{
    pageSection: pageSectionData[],
 //   pageSectionEvent:Map<string,pageSectionEvent[]>, //key sectionCode
 //   pageHomePoster:Map<string,pageEventPoster[]> //key eventCode
    curCalendarEventIndex:number;
}

export interface pageSectionData{
    secName:string,
    secCode:string,
    curEvCode:string,
    secEvents:pageSectionEvent[],
    posterDatas:pageEventPoster[]
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

export interface ResComm<T> {
    data?: T
    code: number
    msg: string
}



