lectures.controller('LessonDescriptionCtrl', function($scope, CommunicationWithServerService, $timeout, $stateParams) {
    // Description data
    $timeout(function() {
        CommunicationWithServerService.getFreeLessonDescription($stateParams.lessondescriprionId).then(function(data) {
            // $scope.$apply(function () {
            $scope.descriptionLesson = data.data;
            // });
            console.log("description lessons", $scope.descriptionLesson);
        }).finally(function(error) {});
    }, 300);
});
