app.controller('loginController',function($scope,$state,$rootScope,JsonService)
{
  $scope.logFunc = function ()
  {
    $rootScope.json=null;
    $scope.display = "";
      var x = document.forms["myForm"]["myAddress"].value;
      var y = document.forms["myForm"]["password"].value;
      if(x != "" && y != "")
      {
        $rootScope.json = JsonService.read();
        $rootScope.json
        .then(function(response) {
       $rootScope.json=response.data;
     });
        $scope.display = "";
        var a=$rootScope.json;
        $state.go('home.dashboard')
    }
      else
      {
        $scope.display = "enter valid password";
      }
   }
});
