(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('PlayerDeleteController',PlayerDeleteController);

    PlayerDeleteController.$inject = ['$uibModalInstance', 'entity', 'Player'];

    function PlayerDeleteController($uibModalInstance, entity, Player) {
        var vm = this;
        vm.player = entity;
        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        vm.confirmDelete = function (id) {
            Player.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };
    }
})();
