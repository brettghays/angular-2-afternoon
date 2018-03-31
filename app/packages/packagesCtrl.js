angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrvc) {
  mainSrvc.getPackageInfo().then(res => {
      console.log(res.data);
      $scope.allPackages=res.data;

      if($stateParams.country){
          $scope.packages = $scope.allPackages.filter(package => package.country === $stateParams.country)
      }
  })
});