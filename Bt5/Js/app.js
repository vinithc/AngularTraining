angular.module("abc",[])
.controller("ctrl",ctrl)

 function ctrl($scope)
 {
     $scope.formValue = true;
     $scope.obj = {};
     $scope.run = function(x)
     {
         if(x)
         {
             $scope.formValue=false;
         }
         else
         {
             $scope.formValue=true;
         }   
     }
 }
 