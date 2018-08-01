module.exports = function(app) {
    app.get('/getT', function (req, res) {
        
        const ServiceTwitter = require('./ServiceTwitter');
        var serviceTwitter = new ServiceTwitter();
       
            var r = serviceTwitter.getJson(req.query).then(function(rs){
            var json = JSON.parse(rs);
           
            res.send(json);
           }) ;

          

      })
    // 
};  