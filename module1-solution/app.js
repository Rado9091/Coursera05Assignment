(function (){
  'use strict';
  //create Module
  angular.module('LunchCheck',[])
  //create controller
  .controller('LunchCheckController', function($scope){
    var amountOrder = 0;
    $scope.amount = " ";
    $scope.checkAmount = function(){
      return "It is too Much!";
    };

  });
})();
