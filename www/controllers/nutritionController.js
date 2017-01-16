this.nutritionController = function ($scope, $http, $route, $location, UserService) {
    $( "#menu" ).show();
    // CHANGE PAGE BACKGROUND
    document.getElementById("docbody").className = "";

    // DEFINE PAGE INTRO
    $scope.intro = 'The following are ways for adding protein and calories to the diet. Be sure to follow other specific instructions from your health care provider. Eat whenever you are hungry. This may mean eating several small meals throughout the day.';

    // GET THE NUTRITION
    $http.get("http://"+UserService.apiRoot+"/nutrition")
        .then(function (response) {
            $scope.nutritions = response.data;
        });
    // END NUTRITION

    // GET THE NUTRITION BY ID
    // $http.get("/nutrition.json")
    //     .then(function (response) {
    //         $scope.nutritions = response.data;
    //         // FILTER THROUGH THE ARRAY TO FIND RECORD
    //         angular.forEach($scope.nutritions, function(nutritionByIds) {
    //             if(nutritionByIds.id == $route.current.params.id) // CHECK IF A RECORD EXISTS WITH THE ID IN URL
    //                 $scope.nutritionById = nutritionByIds;
    //         });
    //         // END FILTER
    //     });

    $scope.intakes = UserService.food;

    // FILTER THROUGH THE ARRAY TO FIND RECORD
    angular.forEach($scope.intakes, function(foodItems) {
        if(foodItems.foodID == $route.current.params.id) // CHECK IF A RECORD EXISTS WITH THE ID IN URL
            $scope.selectedFood = foodItems;
    });
    // END FILTER

    // END NUTRITION

    // GO TO THE NUTRITION DETAIL PAGE
    $scope.nutritionDetail = function(id){
        $scope.topColor = '#558B2F';
        $location.path('nutritiondetail/'+id);

    };
    // GO TO THE NUTRITION DETAIL PAGE END

    // UPDATE FOOD INTAKE
    $scope.updateIntake = function(id, updatedFood){

        var today = new Date();

        console.log('id is '+id+' and food is '+updatedFood.detail);

        for(var i=0;i<UserService.food.length;i++){
            if(UserService.food[i].foodID==id){
                UserService.food[i].detail=updatedFood.detail;
                UserService.food[i].date=today;
                break;
            }
        }
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
