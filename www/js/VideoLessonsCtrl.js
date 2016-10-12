lectures.controller('VideoLessonsCtrl', function($scope, CommunicationWithServerService, $ionicPopup) {

    // Lessons data
    CommunicationWithServerService.getVideoLessons().then(function(data) {
        $scope.videoList = data.data;
        console.log("video lessons", data);
    }).finally(function(error) {});

    // An alert dialog
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Платный контент',
            template: 'Тема доступна в платной версии.'
        });

        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
});
