lectures.controller('VideoLessonsCtrl', function($scope, CommunicationWithServerService, $ionicPopup) {
    // Lessons data
    CommunicationWithServerService.getVideoLessons().then(function(data) {
        $scope.videoList = data.data;

        var i = 1;
        angular.forEach($scope.videoList, function(value, key) {
            value.number = i;
            i++;
        });
    }).finally(function(error) {});

    // An alert dialog
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Платный контент',
            template: 'Тема доступна в платной версии.'
        });
    };
});
