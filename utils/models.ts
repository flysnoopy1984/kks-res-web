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

// {userToken,userInfo}
