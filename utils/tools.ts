import { debug } from "console";

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

    //根据日期获取所在星期几
    static weekDay(time:string,needDate:boolean = true){
        let datelist = ['周日', '周一', '周二', '周三', '周四', '周五', '周六',]
        const date = new Date(time);
        let result =  datelist[date.getDay()];
        if(needDate){
            const m = date.getMonth();
            let mshow:string = m+1+"";
            if(m+1 <10){
                mshow = "0"+mshow;
            }
            result = mshow+"."+date.getDate()+" "+result;
        }
        return result;
    }

    //计算日期和
    static diffDay(date:string){
        let now = new Date();
        let cDate  = new Date(date);
        let diffDate = cDate.getTime()-now.getTime(); 
    
        return Math.ceil(diffDate / (1000 * 3600 * 24)) 

    }

}