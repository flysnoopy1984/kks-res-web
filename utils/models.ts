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
   // pageSectionData: pageSectionData[],
    pageSectionEvent:Map<string,pageSectionEvent[]>, //key sectionCode ,缓存前20个
    
    pageEventPoster:Map<string,pageEventPoster[]> //key eventCode
    curCalendarEventIndex:number;
}

export interface pageSectionData{
    secName:string,
    secCode:string,
    isCalendar?:boolean,
    curEvCode?:string,
    evGroup: [pageEventPoster[]], //将Poser进行分组
    posterDatas:pageEventPoster[],
  //  loadstatus:number;  //数据加载状态 0完成 1 加载中
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

//日历列表
export interface eventCalendarList{
    currentEventIndex:number,
    calendarEventList:eventCalendar[]
}
//日历列表中的-日历事件
export interface eventCalendar{
    evCode:string,
    evName:string,
    ecStartDate:string,
    ecEndDate:string,
    weekDay:string,
    diffNow:number  //距离今天几天
    eventDayDesc:string,
    selected:boolean//是否选中
}
//homeData
export interface homeData{
    sectionName:string,
    sectionCode:string,
    posterList:pageEventPoster[],
}

export interface pageEventPoster{
    id:number,
    title:string,
    des:string,
    author:string,
    url:string,
    coverUrl:string,
    defaultEvent:string,
    defaultYear:number,
    favCount:number,
    likeCount:number,
    //240422 添加小程序码二维码地址
    miniQrUrl:string, 
}

//小程序调用结果
export interface resultGenSchemeVo{
    errcode:string,
    errmsg:string,
    origjson:string,
    openlink:string
}

export interface resultUrlLinkVo{
    errcode:string,
    errmsg:string,
    url_link:string
}

export interface ResComm<T> {
    data?: T
    code: number
    msg: string
}

export interface homeSliderConfig {
    totalwidth?:number,
    gpWidth?:number,
    gpMaxItemNum?:number,
    trans?:string
}



