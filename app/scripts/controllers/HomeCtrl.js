(function() {
    function HomeCtrl() {
      this.heroTitle = "Speak easy friendo";
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
