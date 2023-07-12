
interface apiResult{
    code:String,
    msg: String,
    data: any,
}

export default defineEventHandler(async (event) => {

    var params = await getQuery(event)

    var options = {
     //  method: 'POST',
    //   baseURL : "http://api.iqianba.cn/", 
       params: params, 
    };

    var url = "http://api.iqianba.cn/wx/getAccessToken";
    
    
    var data = await $fetch<apiResult>(url,options);
    return data;

   

     //return wxValue;
    
})

//直接从微信获取Code
// function getAccessDirect(){
//     var params = await getQuery(event);


   
//     var query:any =  {
//         "appid":"wxca2fce9912762fde",
//         "secret":"f3f324a2befb66740e3805eef58952f4",
//         "code":params.code,
//         "grant_type":"authorization_code",
//      }
//      var keys = Object.keys(query);
//      var wxParams = keys.map(function(key){
//         return key+"="+query[key];
//         }
//      ).join("&");

//      var reqUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?"+wxParams;

//      const res = await $fetch<apiResult>(reqUrl);

//      var json = JSON.parse(res.data);

//      return json;
// }