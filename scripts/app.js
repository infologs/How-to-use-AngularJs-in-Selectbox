var app = angular.module("app01", []);

app.controller("controller1",function($scope) {
	 $scope.names = ["Emil", "Tobias", "Linus"];

     //Objects in Dropdown list
    $scope.cars = [
        {model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
    ];

    //The Data Source as an Object
    $scope.carsAsObject = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
    };

    //the object without key value pair
    $scope.carsWithoutkeypare = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    };


});