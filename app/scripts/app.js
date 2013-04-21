'use strict';

var app = angular.module('lelylan.dashboards.devices', [
  'lelylan.components.type',
  'lelylan.components.device'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', { templateUrl: '/partials/home.html', controller: DashboardCtrl }).
    when('/new', { templateUrl: '/partials/new-device.html', controller: CreateCtrl }).
    when('/all', { templateUrl: '/partials/devices.html', controller: DevicesCtrl }).
    when('/categories/:category', { templateUrl: '/partials/devices.html', controller: CategoryCtrl }).
    when('/types/:typeId', { templateUrl: '/partials/type.html',  controller: TypeCtrl }).
    when('/types', { templateUrl: '/partials/types.html', controller: TypesCtrl }).
    otherwise({redirectTo: '/all'});
}]);

app.service( 'NewDevice', ['Device', function(Device) {
  var device;

  return {
    get:   function()        { if (!device) { device = new Device(); }; return device; },
    set:   function(_device) { if (!device) { device = new Device(); }; angular.extend(device, _device); return device },
    reset: function()        { return device = null; }
  };
}])

