angular.module("app").controller("InicioController", InicioController);

function InicioController($location, $anchorScroll, $interval, Textos, $scope, $mdDialog, Toast, $sce) {
  var vm = this;

  vm.abrirModalImagem = abrirModalImagem;
  vm.abrirModalInteressado = abrirModalInteressado;

  vm.moveis = [{

      nome: "Rack de Televisão",
      valor: "R$ 10,00",
      descricao: "Texto do mal",
      imagem: "../images/rack.jpg"
    },
    {

      nome: "Rack de Televisão",
      valor: "R$ 10,00",
      descricao: "Texto do mal",
      imagem: "../images/rack.jpg"
    }
  ];

  function abrirModalImagem(movel) {
    $mdDialog.show({

        template: "<img ng-src='" + movel.imagem + "'/>",
        parent: angular.element(document.body),

        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });

  }

  function abrirModalInteressado(movel) {
    $mdDialog.show({
        controller: 'InteressadoController',
        controllerAs: 'vm',
        templateUrl: '../pages/interessadoModal.html',
        parent: angular.element(document.body),

        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  }

}