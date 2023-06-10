var module1 = angular.module("modul1",[]);
module1.controller("kontrol1",function($scope){
    $scope.deger ="merhaba dünya"
});
var module2 = angular.module("modul2",[]);
module2.controller("kontrol2",function($scope){
    $scope.deger ="AngularJs"
});
angular.module("anamodul",["modul1","modul2"]);