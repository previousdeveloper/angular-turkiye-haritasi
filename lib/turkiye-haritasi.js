(function () {
    'use strict';
    angular
        .module('turkeyMap', [])
        .directive('svgTurkiyeHaritasi', turkeyMap)
    ;

    turkeyMap.$inject = [];

    function turkeyMap() {

        var directive = {
            restrict: 'EA',
            scope: {},
            templateUrl: "lib/turkey-map.html",
            controller: turkeyMapCtrl,
            controllerAs: 'vm',
            bindToController: true,
            link: function (scope, element, attr) {



            }
        };

        return directive;
    }

    turkeyMapCtrl.$inject = ["$scope", "$document", "$attrs"];

    function turkeyMapCtrl($scope, $document, $attrs) {
        /* jshint validthis: true */
        var vm = this;



    }


})();