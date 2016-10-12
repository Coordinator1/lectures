lectures.controller('LessonsCtrl', function($scope, $state, CommunicationWithServerService, $location, $timeout) {

    // Lessons data
    CommunicationWithServerService.getFreeLesson().then(function(data) {
        $scope.lessonsList = data.data;
        console.log("free lessons", data);
    }).finally(function(error) {});

    // Path to Lesson description
    $scope.goToLessonDescription = function(lessondescriprionId) {
        $location.path('app/lesson_description/' + lessondescriprionId);
        console.log("$scope.goToLessonDescription", lessondescriprionId);
    };

});
