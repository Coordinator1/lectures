lectures.controller('LessonsCtrl', function($scope, $state, CommunicationWithServerService, $location, $timeout) {
    // Lessons data
    CommunicationWithServerService.getFreeLesson().then(function(data) {
        $scope.lessonsList = data.data;
        console.log("$scope.lessonsList",$scope.lessonsList);
        var i = 1;
        angular.forEach($scope.lessonsList, function(value, key) {
            value.number = i;
            i++;
        });
    }).finally(function(error) {});

    // Path to Lesson description
    $scope.goToLessonDescription = function(lessondescriprionId) {
        $location.path('app/lesson_description/' + lessondescriprionId);
    };

});
