lectures.controller('TendersCtrl', function($scope, $state, $ionicPopup){
	// Path to free lessons
	$scope.goToFreeLessons = function(){
		$state.go("app.lessons");
	};

	// Path to free lessons
	$scope.goToVideoLessons = function(){
		$state.go("app.video_lessons");
	};

	// Path to free lessons
	$scope.goToSpecialLessons = function(){
		$state.go("app.special_lessons");
	};

	// Path to registration
	$scope.goToRegistration = function(){
		$state.go('app.registration');
	};

	// Path to authorization
	$scope.goToAuthorization = function(){
		$state.go('app.authorization');
	};

	// Path to faq
	$scope.goToFaq = function(){
		$state.go('app.faq');
	};
});