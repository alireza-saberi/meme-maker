(function(){
	var footerController = function($scope, appSettings){
		$scope.version = appSettings.version;

	}
	footerController.$inject = ['$scope', 'appSettings'];

	angular.module('memeMaker').controller('footerController', footerController);

}());