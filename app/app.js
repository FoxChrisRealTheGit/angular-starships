angular.module("starships", ['ui.router']);

angular.module("starships").config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url:'/',
        // template:'Welcome to the home state.'
        templateUrl:'./app/views/home/home.html'
    }).state('ships', {
        url:'/ships',
        // template:'Welcome to the Ships state.'
        templateUrl:'./app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('ship', {
        url:'/ships/:id',
        // template:'Welcome to the Single State state.'
        templateUrl: './app/views/ship/ship.html',
        controller: 'shipCtrl'
    })

    $urlRouterProvider.otherwise('/')

})