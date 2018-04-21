app.service('JsonService', function($http) {
  return {
    read: function() {
      return $http.get("data.json")
        .then(function(response) {
          return response;
        });
    }
  };
});
