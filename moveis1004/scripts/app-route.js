angular
  .module("app")
  .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider, $mdDateLocaleProvider, $locationProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("green")
      .accentPalette("red");

    $locationProvider.html5Mode(true);

    // Example of a French localization.
    $mdDateLocaleProvider.months = ['janeiro', 'fevereiro', 'março', "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    $mdDateLocaleProvider.shortMonths = ['jan', 'fev', 'mar', "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    $mdDateLocaleProvider.days = ["domingo", 'segunda', 'terça', 'quarta', "quinta", "sexta", "sábado"];
    $mdDateLocaleProvider.shortDays = ['D', 'S', 'T', "Q", "Q", "S", "S"];
    $mdDateLocaleProvider.firstDayOfWeek = 0;

    $mdDateLocaleProvider.parseDate = function (dateString) {
      var m = moment(dateString, 'DD/MM/YYYY', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
    };


    $mdDateLocaleProvider.formatDate = function (date) {
      if (date !== undefined) {

        var m = moment(date);
        return m.isValid() ? m.format('DD/MM/YYYY') : '';
      } else {
        return "";
      }
    };
    $stateProvider
      .state("/", {
        url: "/",
        name: "/",
        params: {
          msgSistema: null
        },
        views: {
          viewContent: {
            controller: "InicioController",
            controllerAs: "vm",
            templateUrl: "./pages/inicio.html"
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });

angular.module("app").filter('reverse', function () {
  return function (items) {
    if (items !== undefined) {
      return items.slice().reverse();
    }
  };
});