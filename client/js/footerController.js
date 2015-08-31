(function(){
	var footerController = function($scope, appSettings, $translate){
		$scope.version = appSettings.version;
		$scope.changeLanguage = function (langKey) {
    												$translate.use(langKey);
  													};

	}
	footerController.$inject = ['$scope', 'appSettings', '$translate'];

	angular.module('memeMaker').controller('footerController', footerController);

}());