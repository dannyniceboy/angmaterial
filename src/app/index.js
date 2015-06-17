'use strict';

angular.module('busroute', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'uiGmapgoogle-maps'])
  .config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider
      .state('user', {
        url: '/',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl as user',
        data: {
          title: 'Ride'
        }
      }).state('showpass', {
        url: '/showpass',
        templateUrl: 'app/user/show-pass/show-pass.html',
        controller: 'ShowPassCtrl as showPass',
        data: {
          title: 'Bus Pass',
          showBack: true
        }
      }).state('buy', {
        url: '/buy',
        templateUrl: 'app/user/buy/buy.html',
        controller: 'BuyCtrl as buy',
        data: {
          title: 'Buy Pass',
          showBack: true
        }
      }).state('manage', {
        url: '/manage',
        templateUrl: 'app/admin/manage.html',
        controller: 'ManageCtrl as manage',
        data: {
          title: 'Manage',
          showBack: true
        }
      }).state('drive', {
        url: '/drive',
        templateUrl: 'app/admin/drive/drive.html',
        controller: 'DriveCtrl as drive',
        data: {
          title: 'Drive',
          showBack: true
        }
      }).state('guide', {
        url: '/guide',
        templateUrl: 'app/admin/guide/guide.html',
        controller: 'GuideCtrl as guide',
        data: {
          title: 'Guide',
          showBack: true
        }
      }).state('track', {
        url: '/track',
        templateUrl: 'app/admin/track/track.html',
        controller: 'TrackCtrl as user',
        data: {
          title: 'Track',
          showBack: true
        }
      })
      ;

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyD9fUURN1rqGk38dliGNKWj8vYi-7Ds5tY',
      v: '3',
      libraries: 'weather,geometry,visualization'
    });
    $urlRouterProvider.otherwise('/');
  });
