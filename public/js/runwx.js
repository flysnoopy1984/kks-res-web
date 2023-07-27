
// const { public: { WxState } } = useRuntimeConfig()

var obj = new WxLogin({
    id:"login_container",
    appid: "wxca2fce9912762fde",
    scope: "snsapi_login",
    redirect_uri: encodeURIComponent("http://www.iqianba.cn/wx/login"),
    state:'WxState',
    response_type:"code"

  });
