(function() {
    function HomeCtrl(Room) {
      this.heroTitle = "Speak easy friendo";
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
