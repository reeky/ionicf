this.nutritionDetailsController = function ($scope, $http, $route, $location, UserService) {
    $( "#menu" ).show();
    // CHANGE PAGE BACKGROUND
    document.getElementById("docbody").className = "";

    var nut_id = $route.current.params.id;
    var phone = UserService.phone;
    var pin = UserService.pin;


  // GET THE NUTRITION
  $http.get("http://"+UserService.apiRoot+"/nutritions/"+nut_id+"/"+phone+"/"+pin)
    .then(function (response) {
      $scope.nutritiondetails = response.data;
    });
  // END NUTRITION


    // UPDATE FOOD INTAKE
    $scope.updateIntake = function(id, updatedFood){

        var phone = UserService.phone;
        var pin = UserService.pin;

      $http.post("http://" + UserService.apiRoot + "/nutrition", {
          // '_token': $scope._token,
          'nutritions_id': id,
          'item_taken': updatedFood.detail,
          'phone': phone,
          'pin': pin
        })
          .success(function (data, status, headers, config) {

          });



        $scope.nutUpdate = '';
    };
    // UPDATE FOOD INTAKE END


    // GO BACK TO NUTRITION LANDING PAGE
    $scope.back = function(){
        $scope.topColor = '#558B2F';
        $scope.pageName = "Nutrition";
        $location.path('nutrition');
    };
    // GO BACK END

};
