    app.config(function($routeProvider){
        // ROUTES OF THE APPLICATION
        $routeProvider
            .when("/403", {
                templateUrl: "Views/unauthorized.html",
                controller: "homeController"
            })
            .when("/404", {
                templateUrl: "Views/404.html",
            })
            .when("/", {
                templateUrl: "Views/home.html",
                controller: "homeController"
            })
            .when("/home", {
                templateUrl: "Views/home.html",
                controller: "homeController"
            })
            .when("/symptoms", {
                templateUrl: "Views/symptoms.html",
                controller: "symptomsController"
            })
            .when("/vaccine", {
                templateUrl: "Views/vaccine.html",
                controller: "vaccineController"
            })
            .when("/lifestyle", {
                templateUrl: "Views/lifestyle.html",
                controller: "lifestyleController"
            })
            .when("/nutrition", {
                templateUrl: "Views/nutrition.html",
                controller: "nutritionController"
            })
            .when("/nutritiondetail/:id", {
              templateUrl: "Views/nutritionDetail.html",
              controller: "nutritionDetailsController"
            })
            .when("/nutrition/:id", {
                templateUrl: "Views/nutritionDetail.html",
                controller: "nutritionController"
            })
            .when("/visits", {
                templateUrl: "Views/visits.html",
                controller: "visitsController"
            })
            .when("/about", {
                templateUrl: "Views/about.html",
                controller: "aboutController"
            })
            .otherwise({redirectTo:"/404"});
    });
