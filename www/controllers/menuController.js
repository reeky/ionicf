// app.controller("menuController", menuController);
this.menuController = function ($scope, $http, $location, UserService) {

    $scope.topColor = '#558B2F';

    $scope.home = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = '';
        $location.path('home')
        $('.button-collapse').sideNav('hide');
    }

    $scope.symptoms = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = 'Symptoms';
        $location.path('symptoms')
        $('.button-collapse').sideNav('hide');
    }

    $scope.vaccine = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = 'Vaccination & Enzymes';
        $location.path('vaccine')
        $('.button-collapse').sideNav('hide');
    }

    $scope.lifestyle = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = 'Lifestyle';
        $location.path('lifestyle')
        $('.button-collapse').sideNav('hide');
    }

    $scope.nutrition = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = 'Nutrition';
        $location.path('nutrition')
        $('.button-collapse').sideNav('hide');
    }

    $scope.visits = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = '';
        $location.path('visits')
        $('.button-collapse').sideNav('hide');
    }

    $scope.about = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = 'About';
        $location.path('about')
        $('.button-collapse').sideNav('hide');
    }

}
