(function () {
'use strict';
//Create Module
angular.module('LunchCheck', [])
//Create Controller
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //Initiate the variables
  $scope.input=" ";
  $scope.message=" ";
  
  //Create the function which checks the amount too much or not
  $scope.CheckIfTooMuch = function () {
  //Take the value from the user
  var input=$scope.input;
  //Split the value entered in the input file when comma(,) is found
  var OrderedItems =input.split(',');

 //Creating for Loop each item in the list
  OrderedItems.forEach((item, i) => {
    console.log(i);
    if (input ==" ") {
        $scope.message="Please Enter Data First!";
    }
    else if (i<2) {
        $scope.message="Enjoy!";
    }else if (i>2) {
      $scope.message="Too Much!";
    }
  });
  };
}
})();
