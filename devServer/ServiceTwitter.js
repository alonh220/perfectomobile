class serviceTwitter {
    getJson(query) {
       
      const getUrlQuery = (query) => {
        var url = "https://twitter.com/i/search/timeline?f=realtime&q=";
       
        
        var text = "";
        for (var i in query) {
            if(query[i] != "undefined"){
                 text += (text) ? "&"+i+"="+ query[i] : (i =='hashTag' ) ?  query[i] : i+"="+ query[i] ;
            }
        }
        return url+text;
      }  
      const getScript = (url) => {
            console.log(q);    
        return new Promise((resolve, reject) => {
                const http      = require('http'),
                      https     = require('https');
        
                let client = http;
        
                if (q.toString().indexOf("https") === 0) {
                    client = https;
                }
        
                client.get(q, (resp) => {
                    let data = '';
        
                    // A chunk of data has been recieved.
                    resp.on('data', (chunk) => {
                        data += chunk;
                    });
        
                    // The whole response has been received. Print out the result.
                    resp.on('end', () => {
                        resolve(data);
                    });
        
                }).on("error", (err) => {
                    reject(err);
                });
            });
        };
        var q =  getUrlQuery(query)
        
        return  (async (url) => {
            return  await getScript(url)
                })();
    }
  }
  // exports = Cat; // It will not work
  module.exports = serviceTwitter;