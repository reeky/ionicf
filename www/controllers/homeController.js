

this.homeController = function ($scope, $http, $location, UserService) {
    //change the body background
    document.getElementById("docbody").className = "";
    document.getElementById("docbody").className = "homeBack";

    $scope.login = function(info){
      $scope.info = angular.copy(info);
      UserService.phone = $scope.info.phone;
      UserService.pin = $scope.info.pin;
      $( "#menu" ).show();
      $location.path('/about');
    }

}
