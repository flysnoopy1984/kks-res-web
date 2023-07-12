export default defineEventHandler(async (event) => {
 
      var query = getQuery(event);
      var options = {
        baseURL : "http://api.iqianba.cn", 
    
         query: query,
         server: true,
  
      
      };
      var url = "user/getInfo"
      var data = await $fetch(url,options);
      return data;
    
  })