lectures.controller('AuthRegCtrl', function($scope, $rootScope, $state, $location, CommunicationWithServerService) {

	// User data lectures object 
    $rootScope.userDataLectures = {};

    // Authorization object
    $rootScope.registration = {};

    // Authorization object
    $rootScope.authorization = {};

    // Communication with server
    $scope.registrationFunction = function() {
        CommunicationWithServerService.getUserToken().then(function(data) {
            $rootScope.userDataLectures.userToken = data.data.access_token;
            console.log("$rootScope.userDataLectures.userToken", data);

            localStorage.setItem("userDataLectures", JSON.stringify($rootScope.userDataLectures));
            console.log("localStorage.setItem", $rootScope.userDataLectures);

            $location.path('app/authorization');
        }).finally(function(error) {});
    };

    // Communication with server
    $scope.authorizationFunction = function() {
        CommunicationWithServerService.authorization().then(function(data) {
            $rootScope.userDataLectures.userToken = data.data.access_token;
            console.log("$rootScope.userDataLectures.userToken $scope.authorization = function()", data);

            /*localStorage.setItem("userDataLectures $scope.authorization = function()", JSON.stringify($rootScope.userDataLectures));
            console.log("localStorage.setItem $scope.authorization = function()", $rootScope.userDataLectures);*/

            $location.path('app/tenders');
        }).finally(function(error) {});
    };

    // Path to registration
    $scope.goToRegistration = function() {
        $state.go('app.registration');
    };

    // Path to forgot password
    $scope.goToForgotPassword = function() {
        $state.go('app.forgot_password');
    };
});
