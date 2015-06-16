'use strict';

angular.module('busroute')
  .controller('MainCtrl', function($mdSidenav, $mdUtil, $log, $rootScope, $state, loading) {
    var main = this;
    main.loading = loading.loading;
    console.log('main.loading', main.loading.loading);
    main.toggleSlide = toggleSlide;
    main.options = [{
      route: 'user',
      description: 'Ride'
    }, {
      route: 'track',
      description: 'Track'
    }, {
      route: 'purchase',
      description: 'Purchase'
    }, {
      route: 'manage',
      description: 'Manage'
    }]
    main.toggleLeft = buildToggler('left');
    main.navigateTo = navigateTo;
    main.close = close;
    main.back = function() {
      window.history.back();
    }

    $rootScope.$on('$stateChangeSuccess', function(ev, state) {
      if (state.data && state.data.title) {
        main.currentView = state.data.title;
      }
      if (state.data && state.data.showBack) {
        main.showBack = true;
      } else {
        main.showBack = false;
      }
    });

    function close() {
      console.log('im closing im closing');
      toggleLeft.close();
    }

    function navigateTo(route) {
      console.log('navigating');
      $mdSidenav('left').close();
        main.currentView = route.description;
        $state.go(route.route);
      }
      /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
    function buildToggler(navID) {
      console.log('building toggler');
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function() {
            $log.debug("toggle " + navID + " is done");
          });
      }, 300);
      return debounceFn;
    }

    function toggleSlide() {

    }
  });
