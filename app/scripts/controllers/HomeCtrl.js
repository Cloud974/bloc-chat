(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;
        home.currentUser = $cookies.get('blocChatCurrentUser');

        home.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: 'sm'
            });
        }

        home.setCurrentRoom = function (room) {
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
        }

        home.sendMsg = function () {
            home.newMessage.roomId = home.currentRoom.$id;
            home.newMessage.username = home.currentUser;
            Message.send(home.newMessage);
            home.newMessage.content = "";
        }

        home.isFirstMsg = function (index, messages) {

          if (index > 0 && messages[index].username === messages[index-1].username) {
            return false;
          }else {
            return true;
          }
        }

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
