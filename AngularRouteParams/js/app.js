var app=angular.module("MyApp",['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/Home.html"
    })
    .when("/user/:username", {
        templateUrl : "views/User.html",
        controller:"user"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});