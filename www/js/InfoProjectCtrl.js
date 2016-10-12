lectures.controller('InfoProjectCtrl', function($scope, $ionicModal, $rootScope, CommunicationWithServerService) {

    $ionicModal.fromTemplateUrl('templates/modals/contact_form.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalContactForm = modal;
    });
    $scope.openModalContactForm = function() {
        $scope.modalContactForm.show();
    };
    $scope.closeModalContactForm = function() {
        $scope.modalContactForm.hide();
    };

    CommunicationWithServerService.getAbout().then(function(data) {
        $scope.about = data.data;
        console.log("getAbout()", data);
    }).finally(function(error) {});

    $rootScope.contacts = {};
    $scope.sendContactForm = function() {
        CommunicationWithServerService.sendContact().then(function(data) {
            console.log("sendContact()", data);
        }).finally(function(error) {});
    };

});
