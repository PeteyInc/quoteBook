angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {

  $scope.getQuotes = function() {
    $scope.quotes = dataService.getQuotes();
  }

  $scope.getQuotes();

});
