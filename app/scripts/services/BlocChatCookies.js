(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

      $uibModal.open({
          templateUrl: '/templates/signIn.html',
          controller: 'ModalCtrl as modal',
          size: 'sm'
      });
    }
  }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
