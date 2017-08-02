(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;

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
            console.log(home.currentRoom);
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
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
