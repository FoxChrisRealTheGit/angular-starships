angular.module("starships").controller("shipCtrl", function($scope, shipsSrvc, $stateParams){
    $scope.id = $stateParams.id;

    shipsSrvc.getShip($stateParams.id).then(ship=>{
        $scope.ship=ship;
    })
})