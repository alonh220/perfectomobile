var twitterService = angular.module('twitterService.module',[]);

twitterService.factory("twitterService", function ($http, $sce) {
    const api_url = "http://localhost:8080/";
    var service = {
        search: search
    };

    return service;

    function search(hashTag, since, until, lang){
        return    $http.get(api_url+"getT?"+"hashTag="+hashTag+"&since="+since+"&until="+until+"&lang="+lang)
                    .then(function(res){
                        var div = document.createElement("div");
                        var result = [];
                        var html =  $.parseHTML(res.data.items_html)
                        html.forEach(function(item){
                           try{
                            var name = item.nextElementSibling.querySelector('div.original-tweet[data-name]').dataset.name;
                            var time = item.nextElementSibling.querySelector('span._timestamp[data-time]').dataset.time;
                            var date =  new Date(time * 1000).toDateString();
                            var text = item.nextElementSibling.querySelector('p.tweet-text').innerText;
                            var retweets = item.nextElementSibling.querySelector('span.ProfileTweet-actionCount[data-tweet-stat-count]').dataset.tweetStatCount;
                            var permalinkPath =  item.nextElementSibling.querySelector('div.tweet.js-stream-tweet').dataset.permalinkPath;
                            result.push({
                                "name": name , 
                                "date": date,
                                "text": text,
                                "retweets": retweets,
                                "permalinkPath":permalinkPath
                            });
                        }catch(e){
                           
                        }
                        })
                        return result;
                    })
           }
});