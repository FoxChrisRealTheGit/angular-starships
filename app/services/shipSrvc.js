angular.module("starships").service("shipsSrvc", function ($http) {
    this.ships = ["x-wing", "death star"];
    this.getShips = function () {
        return $http.get('https://swapi.co/api/starships/').then(res=>{
            return res.data.results.map(ship=>{
                let arr = ship.url.split('/');
                ship.id = arr[arr.length-2];
                return ship
            });
        })
    }
    this.getShip = function(id){
        return $http.get('https://swapi.co/api/starships/'+id).then(res=>{
            return res.data;
        })
    }
})