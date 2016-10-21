lectures.controller('SpecialLessonsCtrl', function($scope, CommunicationWithServerService, $ionicPopup) {
    // Lessons data
    CommunicationWithServerService.getSpecialLessons().then(function(data) {
        $scope.specialList = data.data;

        var i = 1;
        angular.forEach($scope.specialList, function(value, key) {
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
