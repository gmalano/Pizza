// vue.config.js
module.exports = {
    devServer: {
      
       proxy: {
        //'^/api/': {
        '/api/': {
          target: 'http://localhost:99/',
          //target: 'http://localhost:99/caepcav/',
          changeOrigin: true, // so CORS doesn't bite us. 
          
          //C:\vue\caepcav\src\php
        }
      
        
      }
      
    }
  }