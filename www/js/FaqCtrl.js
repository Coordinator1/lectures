lectures.controller('FaqCtrl', function($scope, $ionicModal, CommunicationWithServerService, $rootScope) {

    $ionicModal.fromTemplateUrl('templates/modals/faq_modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalFaq = modal;
    });
    $scope.openModalFaq = function() {
        $scope.modalFaq.show();
    };
    $scope.closeModalFaq = function() {
        $scope.modalFaq.hide();
    };

    CommunicationWithServerService.getFaq().then(function(data) {
        $scope.faqList = data.data;
        console.log("$scope.faqList", data);
    }).finally(function(error) {});

    $rootScope.faq = {};
    $scope.sendFaqQuestion = function() {
        CommunicationWithServerService.sendQuestion().then(function(data) {
            console.log("sendQuestion()", data);
        }).finally(function(error) {});
    }


    /*
     * if given answer is the selected answer, deselect it
     * else, select the given answer
     */
    $scope.toggleAnswer = function(lesson) {
        if ($scope.isAnswerShown(lesson)) {
            $scope.shownAnswer = null;
        } else {
            $scope.shownAnswer = lesson;
        }
    };

    $scope.isAnswerShown = function(lesson) {
        return $scope.shownAnswer === lesson;
    };

});
