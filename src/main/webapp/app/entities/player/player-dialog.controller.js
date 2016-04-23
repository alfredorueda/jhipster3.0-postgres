(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('PlayerDialogController', PlayerDialogController);

    PlayerDialogController.$inject = ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Player'];

    function PlayerDialogController ($scope, $stateParams, $uibModalInstance, entity, Player) {
        var vm = this;
        vm.player = entity;
        vm.load = function(id) {
            Player.get({id : id}, function(result) {
                vm.player = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('jhipsterApp:playerUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.player.id !== null) {
                Player.update(vm.player, onSaveSuccess, onSaveError);
            } else {
                Player.save(vm.player, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
