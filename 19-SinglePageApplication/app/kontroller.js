spa.controller('anasayfaCtrl', function($scope) {
    $scope.baslik = 'ornek.com';
	$scope.resim = 'assets/kapak1.jpg';
	$scope.icerik = 'sosyal medyalar';	
	$scope.facebookURL = 'https://www.facebook.com/';
	$scope.linkedinURL = 'https://tr.linkedin.com/';
});

spa.controller('hakkimdaCtrl', function($scope) {
    $scope.baslik = 'HAKKIMDA';
	$scope.resim = 'assets/kapak1.png';
	$scope.icerik = 'hakkımda yazısı';	
});

// json dosyasından verileri http.get metodu ile alan kontroller 
spa.controller('portfolyoCtrl', function($scope,$http) {
    $scope.baslik = 'PORTFOLYO';
    $scope.icerik = 'projelerim';
	$http.get("json/ornekler.json")
          .success(function(response) {
            $scope.sonuc = response;
          });
});

spa.controller('iletisimCtrl', function($scope) {
    $scope.baslik = 'İLETİŞİM';
	$scope.icerik = 'mail adresi.';	
    $scope.email = 'ornek@gmail.com';
});

// seçili olan menudeki butonları seçime göre değiştiren direktif
spa.directive('activeLink', function () {
    return {
        link: function (scope,element, attrs) {
            element.find('.nav a').on('click', function () {
                angular.element(this)
                    .parent().siblings('.active')
                    .removeClass('active');
                angular.element(this)
                    .parent()
                    .addClass('active');
            });
        }
    };

});