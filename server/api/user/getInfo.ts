export default defineEventHandler(async (event) => {
 
     
  // console.log("comming")
      var options = {
        baseURL : "http://api.iqianba.cn", 
    
         query: {"userId":1},
         server: true,
    
        //  pick: ['data']
        // baseURL: "http://192.168.197.75:9001"  
        
      
      };
      var url = "user/getInfo"
      var data = await $fetch(url,options);
      return data;
    
  })