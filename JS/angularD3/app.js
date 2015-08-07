var app = angular.module('dataRpm', ['ngRoute', 'd3']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/spreadSheet',
            {
                controller: 'controller',
                templateUrl: './views/spreadSheet.html'
            })
        .when('/data',
            {
                controller: 'controller',
                templateUrl: './views/data.html'
            })
        .otherwise({ redirectTo: '/' });
});



