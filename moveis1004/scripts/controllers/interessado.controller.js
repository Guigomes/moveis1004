angular.module("app").controller("InteressadoController", InteressadoController);

function InteressadoController($scope, $mdDialog) {
    var vm = this;



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


}