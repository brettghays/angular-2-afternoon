angular.module('devmtnTravel').controller('locationCtrl', function($scope, mainSrvc) {
  mainSrvc.getTravelInfo().then(res => {
      console.log(res.data);
      $scope.locations=res.data;
  }) 
});