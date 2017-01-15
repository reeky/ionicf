this.visitsController = function ($scope, $http, $route, $location, UserService) {

    document.getElementById("docbody").className = "";

    // DEFINE TEMPORARY ARRAYS
    $scope.visits = UserService.visitsArray;
    $scope.perscripts = UserService.prescription;
    $scope.press = UserService.tempItemList;

    $scope.intro = 'Add and manage doctor visits, prescriptions and tests';

    // DELETE DOCTOR FROM ARRAY
    $scope.removeVisits = function(id){
        for(var i = $scope.visits.length - 1; i >= 0; i--){ // LOOP THROUGH DOCTOR VISITS TO CHECK IF RECORD EXIST
            if($scope.visits[i].id == id){
                $scope.visits.splice(i,1); // DELETE RECORD FROM VISITS ARRAY
            }
        }
    }
    // DELETE DOCTOR FROM ARRAY END

    // DELETE PRESCRIPTION ITEM FROM ARRAY
    $scope.removeItem = function(id){

        for(var i = $scope.perscripts.length - 1; i >= 0; i--){
            if($scope.perscripts[i].id == id){
                UserService.prescription.splice(i,1);
            }
        }
        $route.reload(); // RELOAD THE ROUTE
    };
    // DELETE PRESCRIPTION ITEM FROM ARRAY END

    // SHOW DETAIL
    $scope.showDetail = function(id){

        UserService.tempItemList = []; // EMPTY THE GLOBAL ARRAY

        angular.forEach($scope.visits, function(visit) {
            $("#detail"+visit.id).hide("slow");
        });

        $scope.prescriptions = UserService.prescription;
        angular.forEach($scope.prescriptions, function(pres) {
            if(pres.visit == id)
                UserService.tempItemList.push(pres); //PUSH NEW ITEMS TO THE GLOBAL ARRAY
        });

        $scope.press = UserService.tempItemList;

        $("#detail"+id).slideDown("slow"); // OPEN DETAILS LIST WITH ANIMATION

    };
    // SHOW DETAIL END

    // OPEN DOCTOR ADDING FORM
    $scope.addDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideDown("slow");
    };
    // OPEN DOCTOR ADDING FORM END

    // CLOSE DOCTOR ADDING FORM
    $scope.closeDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideUp("slow");
        $("#addButton").show();
    };
    // CLOSE DOCTOR ADDING FORM END

    // CREATE DOC VISIT
    $scope.createDoc = function(doc){

        var newId = UserService.visitsArray.length+1;

        $("#addButton").hide();
        $("#addDoc").slideUp("slow");
        $("#addButton").show();
        doc.id = newId;
        doc.date = new Date();
        UserService.visitsArray.push(doc); // ADD ITEM TO VISITS LIST
        $scope.doc = "";
    };
    // CREATE DOC VISIT END

    // CREATE PRESCRIPTION
    $scope.createPresc = function(visitId,presc){

        var newId = UserService.prescription.length+1;
        presc.id = newId;
        presc.visit = visitId;
        UserService.prescription.push(presc); // PUSH NEW PRESCRIPTION TO GLOBAL PRESCRIPTION LIST
        $scope.newPresc = "";

        var presList2 = [];

        $scope.newPrescription = UserService.prescription;
        angular.forEach($scope.newPrescription, function(p) {
            if(p.visit == visitId) // CHECK IF THERE ARE PRESCRIPTION ITEMS BELONGING TO DOCTOR VISIT
                presList2.push(p); // PUSH ITEMS TO PRESCRIPTION LIST
        });

        $route.reload();

    };
    // CREATE PRESCRIPTION END

    // CLOSE PRESCRIPTION
    $scope.closePresc = function(id){
        $("#detail"+id).slideUp("slow");
        $scope.prescript = "";
    };
    // CLOSE PRESCRIPTION END

    // OPEN DOCTOR ADDING FORM
    $scope.addDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideDown("slow"); // OPEN AND ANIMATE
    };
    // OPEN DOCTOR ADDING FORM END

    // CLOSE DOCTOR ADDING FORM
    $scope.closeDoc = function(){
        $("#addButton").hide();
        $("#addDoc").slideUp("slow"); // CLOSE AND ANIMATE
        $("#addButton").show();
    };
    // CLOSE DOCTOR ADDING FORM END


}