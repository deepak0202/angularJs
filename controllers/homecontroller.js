//var app = angular.module('myApp')

app.controller('homeController', function($scope,$mdSidenav,$rootScope,$filter)
{
 $scope.toggle =function()
{
 if(document.getElementById("mySidenav").style.width=="0px")
 {
  openNav();
 }
 else
 {
 closeNav();
 }
 }

function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

}
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0px";
}
 $scope.manufacturerArray =[];
 $scope.storageArray =[];
 $scope.osArray = [];
 $scope.cameraArray = [];



angular.forEach($rootScope.json,function(value,key){
  $scope.manufacturerArray.push(value.specs.manufacturer);
  $scope.manufacturer = $scope.manufacturerArray.filter(function(elem,index,self){
       return index == self.indexOf(elem);
     })
});

angular.forEach($rootScope.json,function(value,key){
  $scope.storageArray.push(value.specs.storage);
  $scope.storage = $scope.storageArray.filter(function(elem,index,self){
       return index == self.indexOf(elem);
     })
});

angular.forEach($rootScope.json,function(value,key){
  $scope.osArray.push(value.specs.os);
  $scope.os = $scope.osArray.filter(function(elem,index,self){
       return index == self.indexOf(elem);
     })
});

angular.forEach($rootScope.json,function(value,key){
  $scope.cameraArray.push(value.specs.camera);
  $scope.camera = $scope.cameraArray.filter(function(elem,index,self){
       return index == self.indexOf(elem);
     })
});

// $scope.manufacturerBoolean = manufacturer;
$rootScope.manufacturerArray1 =[];
$rootScope.storageArray1 =[];
$rootScope.osArray1 = [];
$rootScope.cameraArray1 = [];


      $scope.toggle1 = function (json, list) {
        var idx = list.indexOf(json);
        // console.log("index "+idx);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(json);
        }
      };

});

app.filter('myFormat', function()
{
    // return function(json,manufacturerArray1,storageArray1,osArray1,cameraArray1)
    return function(json,manufacturerArray1,storageArray1)
    {

        var selected = [];
      if(manufacturerArray1.length > 0||storageArray1.length > 0)
      {
        for(var j = 0; j < json.length;j++)
        {
          for(var i = 0; i< manufacturerArray1.length;i++)
          {
            var name = manufacturerArray1[i];
            var objectName = json[j];
                 var manufactureNameInJson = objectName.specs.manufacturer;
                if(manufactureNameInJson==name)
                {
                  selected.push(objectName);
                }
          }
        }
      }
      else{
        selected=json;
      }
      console.log(selected);
      if(storageArray1.length > 0)
      {
        var indexArray = [];
        for(var j = 0; j < selected.length; j++)
        {
          for(var i = 0; i < storageArray1.length;i++)
          {
            var storageName = storageArray1[i];
            var storageObjectName = selected[j];
            var storageNameInObject = storageObjectName.specs.storage;
            if(storageName != storageNameInObject)
            {
              indexArray.push(j);
            }
          }
        }
        for(var k = 0; k < indexArray.length;k++)
        {
          selected.splice(0,indexArray[k]+1);
        }
      }
        return selected;
    };
  });
