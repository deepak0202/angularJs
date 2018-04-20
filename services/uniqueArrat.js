app.service('uniqueArray',function()
{
  this.uniArray = function(array)
  {
    $scope.manufacturer = $scope.manufacturerArray.filter(function(elem,index,self){
         return index == self.indexOf(elem);
       })
  }
}


)
