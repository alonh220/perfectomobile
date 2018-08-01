
angular.module('home.module',[]).component('home', {
    templateUrl: "components/home/home.html",
    controller: homeCTRL,
    controllerAs: 'vm'
});


function homeCTRL(twitterService, $interval){
    var vm = this;
    vm.filter  = {};
    vm.filter.since = new Date();
    vm.filter.until = new Date();
    vm.lang = ["he","en"];
    vm.result ;
    vm.loader = false;
    vm.determinateValue = 10;
    // function 
    vm.filterClick = filterClick;
    vm.$onInit = onInit;
    
    function onInit(){
        $interval(function() {

            vm.determinateValue += 10;
            if (vm.determinateValue > 100) {
                vm.determinateValue = 10;
            }
    
          }, 100);
    }

    function filterClick(){
        vm.result = null;
        vm.loader = true;;
        twitterService.search(vm.filter.hashtag, moment(vm.filter.since).format('YYYY-MM-DD') , moment(vm.filter.until).format('YYYY-MM-DD'), vm.filter.lang)
          .then(function(res){
            vm.result = res;
            vm.loader = false;
          });
    }
    
} 