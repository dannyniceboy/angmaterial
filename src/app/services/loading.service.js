angular.module('busroute')
  .factory('loading', loading);


function loading() {
  var model = {
    loading: false
  };
  return {
    setLoading: setLoading,
    loading: model
  };

  function setLoading(loading) {
    model.loading = loading;
  }
}
