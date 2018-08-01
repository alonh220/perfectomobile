
angular.module('twittercomponent',[])
.component('twitter', {
    templateUrl: "components/rows/twitterComponent.html",
    controller: twitterCTRL,
    bindings: {
        data: "="
    },
    controllerAs: 'vm'
});


function twitterCTRL($sce){
    var vm = this;

    //functions
    vm.$onInit = onInit; 
    vm.selectedItem = selectedItem;
    
    
    
    function onInit(){
        
    }

    function selectedItem(item){
        console.log(item.name);
        vm.iframe = $sce.trustAsResourceUrl("https://twitframe.com/show?url="+encodeURIComponent("https://twitter.com"+item.permalinkPath));
    }
    
    

    
  
}    