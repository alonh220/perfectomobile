
angular.module('perfectoMobile',['ui.router','ngMaterial','twitterService.module','home.module','twittercomponent','row.module'])
.controller('appCtrl',function(){
    console.log("here");
})
.config(['$stateProvider', '$urlRouterProvider','$sceDelegateProvider',
    function($stateProvider, $urlRouterProvider,$sceDelegateProvider) {
       
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app.html',
                
            });

    }]);