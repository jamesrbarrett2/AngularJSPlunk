// James Barrett
(function() {
  //Model & controler here - view in HTML
  //https://api.github.com/users/jamesrbarrett2

  var app = angular.module("githubViewer");

  var MainController = function($scope,  $interval, $location) {

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    }

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    $scope.search = function(username) {

      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);
    }
    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();

  };
  app.controller("MainController", MainController);

}());