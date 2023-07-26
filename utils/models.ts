export interface userToken{
    token:any,
    openId:any,
    expireDate?:any
}

export interface userInfo {
    openid?:string,
    nickname?:string,
    sex?:string,
    province?:string,
    country?:string,
    city?:string,
    unionid?:string,
    headimgurl?:string,
  }
export interface wxLogin{
    userInfo:userInfo,
    token:userToken
}

// {userToken,userInfo}
