(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('PlayerController', PlayerController);

    PlayerController.$inject = ['$scope', '$state', 'Player'];

    function PlayerController ($scope, $state, Player) {
        var vm = this;
        vm.players = [];
        vm.loadAll = function() {
            Player.query(function(result) {
                vm.players = result;
            });
        };

        vm.loadAll();
        
    }
})();
