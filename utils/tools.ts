export class tools{

    static  jsonToUrl(query:any) {
        var keys = Object.keys(query);
        var params = keys.map(
            (key)=>{
              return key+"="+query[key];
              }
          ).join("&");
          return params;    
    }

    static currentYear(){
        var d = new Date();
        return d.getFullYear();
    }

}