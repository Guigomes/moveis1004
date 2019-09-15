angular.module("app").controller("InteressadoController", InteressadoController);

function InteressadoController(Interesse, items, $mdToast) {
    var vm = this;
    vm.movel = items;
    vm.enviarInteresse = enviarInteresse;


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

    function enviarInteresse() {

        let interesse = {
            movel: vm.movel.nome,
            nome: vm.nome,
            telfone: vm.telefone
        }

        Interesse.adicionarInteresse(interesse).then(function (sucesso) {
            if (sucesso) {
                $mdToast.show(
                        $mdToast.simple()
                        .textContent("Interesse enviado com sucesso. Obrigado.")
                        .position("bottom left")
                        .hideDelay(5000))
                    .then(function () {

                    }).catch(function () {

                    });
            } else {
                $mdToast.show(
                        $mdToast.simple()
                        .textContent("Não foi possível enviar o interesse. Desculpe")
                        .position("bottom left")
                        .hideDelay(5000))
                    .then(function () {

                    }).catch(function () {

                    });
            }


        });

    }
}