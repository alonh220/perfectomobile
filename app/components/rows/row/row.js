
angular.module('row.module', []).component('row', {
    templateUrl: "components/rows/row/row.html",
    controller: rowCTRL,
    bindings: {
        data : "=",
        forward : "="
       
    },
    controllerAs: 'vm'
});


function rowCTRL(){
    var vm = this;
    vm.data;

    // functions
    vm.$onInit = onInit;
    vm.selected = selected;

    function onInit(){
    
    }

    function selected(row){
        vm.forward(row);
    }
    
} 