var uygulama = angular.module('uygulama', []);
uygulama.controller('kontrol', function($scope, $http) {
	$scope.kullanici = {};
	$scope.hataKullaniciAdi = '';
	$scope.hataKullaniciSifre = '';
	$scope.mesaj = '';
	$scope.formGonder = function() {
        $http({
          method  : 'POST',
          url     : './php/18-uye-giris-form-dogrulama.php',
          data    : $scope.kullanici,
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
        })
        .success(function(data) {
              $scope.hataKullaniciAdi = data.kullaniciAdi;
              $scope.hataKullaniciSifre = data.kullaniciSifre;
              $scope.mesaj = data.mesaj;
            
        });
    };
});