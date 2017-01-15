//UI router

this.symptomsController = function ($scope, $http, $route, $location, $filter, UserService) {

    //change background to default
    document.getElementById("docbody").className = "";

    // define page introduction text
    $scope.intro = 'Cystic fibrosis is a genetic condition. This means that cystic fibrosis patients may exhibit early symptoms such as salty skin or pooping irregularities at birth. Other symptoms will start to develop as you grow older they are, but not limited to: ';

    // GET THE SYMPTOMS
    $http.get("/symptoms.json")
        .then(function (response) {
            $scope.symptoms = response.data;
        });
    // END SYMPTOMS

}