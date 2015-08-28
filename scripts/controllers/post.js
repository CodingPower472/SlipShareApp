'use strict';


app.controller('PostController', ['$scope', function (scope, $scope) {

    app.directive('stSelectAll', function () {
        return {
            restrict: 'E',
            template: '<input type="checkbox" ng-model="isAllSelected" />',
            scope: {
                all: '='
            },
            link: function (scope, element, attr) {

                scope.$watch('isAllSelected', function () {
                    scope.all.forEach(function (val) {
                        val.isSelected = scope.isAllSelected;
                    })
                });

                scope.$watch('all', function (newVal, oldVal) {
                    if (oldVal) {
                        oldVal.forEach(function (val) {
                            val.isSelected = false;
                        });
                    }

                    scope.isAllSelected = false;
                });
            }
        }
    });

    scope.rowCollection = [
        {
            boatLength: '20-24 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '25-29 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '30-34 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '35-39 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '40-44 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '45-49 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '50-54 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        },
        {
            boatLength: '55-65 ft',
            maxDraft: 5,
            maxBeam: 5,
            power: 30,
            price: 10
        }
    ];


}]);