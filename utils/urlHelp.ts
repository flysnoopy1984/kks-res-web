// export function jsonToUrl=()=>{
//     return "";
// }

export function jsonToUrl(query:any) {
    var keys = Object.keys(query);
    var params = keys.map(
        (key)=>{
          return key+"="+query[key];
          }
      ).join("&");
      return params;    
}

