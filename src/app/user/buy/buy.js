'use strict';

angular.module('busroute')
  .controller('BuyCtrl', BuyCtrl);

function BuyCtrl($mdToast, $mdDialog, $state, $timeout, loading) {
  var buy = this;
  console.log('loading: ', loading.loading.loading);
  buy.purchase = purchase;

  function purchase() {

    var confirm = $mdDialog.confirm()
      .parent(angular.element(document.body))
      .title('Bus Pass Purchase')
      .content('Are you sure you would like to purschase a ' + buy.type + ' pass for $7.99?')
      .ariaLabel('Confirm Payment')
      .ok('Purchase')
      .cancel('Cancel')
      //.targetEvent(ev);
    $mdDialog.show(confirm).then(process, function() {
      $mdToast.show(
        $mdToast.simple()
        .content('Purchase Cancelled')
        .position('bottom')
        .hideDelay(2000)
      );
    });

  }

  function process() {
    loading.setLoading(true);
    console.log('should be true', loading.loading);
    $timeout(function() {
      $mdToast.show(
        $mdToast.simple()
        .content('Pass Purschased')
        .position('bottom')
        .hideDelay(2000)
      );
      loading.setLoading(false);
      console.log('should be false', loading.loading);
      $state.go('user');
    }, 2500);

  }

}
