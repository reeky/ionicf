// (function() {

    var app = angular.module("cf", ["ngRoute","ocNgRepeat"]);

    // THIS IS WHERE THE GLOBAL VARIABLES ARE DEFINED AS A SERVICE NAMED UserService
    /*
        THE PRESCRIPTION VISITS AND FOOD ARRAYS ARE DEFINED HERE AS A GLOBAL SO THAT
        THE CONTENT WILL REMAIN GLOBAL AND UNCHANGED EVEN WHEN PAGE NAVIGATES.
    */
app.factory('UserService', function() {
        return {
            prescription : [{ id: 1, visit: 1, name: "Panadol 10mg (BBD)"},
                { id: 2, visit: 1, name: "Paracetamil 20mg"},
                { id: 3, visit: 2, name: "Voltarin 20mg"},
                { id: 4, visit: 2, name: "Amloidipine 5mg"},
                { id: 5, visit: 2, name: "Volini"}],
            visitsArray : [
                { id: 1, name: "Dr. Mohamed Anil", letter: "M", color: "#00BCD4", date: "08-12-2016"},
                { id: 2, name: "Dr. Ismail Fazeel", letter: "I", color: "#D500F9", date: "08-12-2016"},
                { id: 3, name: "Dr. Ahmed Rasheed", letter: "A", color: "#1DE9B6", date: "08-12-2016"},
                { id: 4, name: "Dr.Naresh Patel", letter: "N", color: "#00BCD4", date: "08-12-2016"},
                { id: 5, name: "Dr. Abhijeeth Sawanth", letter: "A", color: "#D500F9", date: "08-12-2016"}
            ],
            food : [
                { id: 1, foodID: 1, detail: "Had assorted nuts", date: "08-12-2016"},
                { id: 2, foodID: 2, detail: "Had chocolate Milk Shake", date: "08-12-2016"},
                { id: 3, foodID: 3, detail: "Had soup with lots of veggies", date: "08-12-2016"},
                { id: 4, foodID: 4, detail: "Had peanut butter with brown bread", date: "08-12-2016"},
                { id: 5, foodID: 5, detail: "Had 2 glasses of milk morning and night", date: "08-12-2016"},
                { id: 6, foodID: 6, detail: "Had brinjol salad", date: "08-12-2016"},
                { id: 7, foodID: 7, detail: "Had two eggs", date: "08-12-2016"},
                { id: 8, foodID: 8, detail: "Had beef steak with cheese", date: "08-12-2016"}
            ],
            phone : 1234567,
            pin : 1234,
          apiRoot : 'cf-api'
        };
    });
    // GLOBAL VARIABLES END

    ////////////////////// DEFINE CONTROLLERS ///////////////////////
    app.controller("menuController", menuController);
    app.controller("homeController", homeController);
    app.controller("symptomsController", symptomsController);
    app.controller("vaccineController", vaccineController);
    app.controller("lifestyleController", lifestyleController);
    app.controller("nutritionController", nutritionController);
    app.controller("nutritionDetailsController", nutritionDetailsController);
    app.controller("visitsController", visitsController);
    app.controller("aboutController", aboutController);
	////////////////////// DEFINE CONTROLLERS END ///////////////////////

// })();
