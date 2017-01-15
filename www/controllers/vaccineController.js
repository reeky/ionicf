this.vaccineController = function ($scope, $http, $location, UserService) {

    document.getElementById("docbody").className = "";

    // DEFINE THE INTROS
    $scope.vaccineIntro = 'Forty years ago cystic fibrosis (CF) patients seldom survived beyond infancy and vaccination was far from being a priority. Today with the help of vaccination and other treatments CF patients have a better chance of living a better life all the way to adulthood and beyond. Some of the important vaccines for CF patients are:';
    $scope.enzymeIntro = 'Pancreatic ducts of CF patients are blocked due to the secretion of mucus in those glands. This prevents digestive enzymes that are made by the pancreas from reaching the intestines, where they are needed for digestion. Therefore intake of these enzymes is important for CF patients. It can be taken with every meal or snack that contain fat or as instructed by the physician. Some of these enzyme supplements are:';
    // END INTROS

    // GET VACCINES
    $http.get("/vaccine.json")
        .then(function (response) {
            $scope.vaccines = response.data;
        });
    // END VACCINES

    // GET ENZYMES
    $http.get("/enzyme.json")
        .then(function (response) {
            $scope.enzymes = response.data;
        });
    // END ENZYMES

}