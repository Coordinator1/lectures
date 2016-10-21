lectures.controller('LessonDescriptionCtrl', function($scope, CommunicationWithServerService, $timeout, $stateParams) {
    // Description data
    $timeout(function() {
        CommunicationWithServerService.getFreeLessonDescription($stateParams.lessondescriprionId).then(function(data) {
            $scope.descriptionLesson = data.data;
            console.log("$scope.descriptionLesson",$scope.descriptionLesson);
        }).finally(function(error) {});
    }, 300);
});
