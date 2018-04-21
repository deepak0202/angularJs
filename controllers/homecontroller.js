app.controller('homeController', function($scope, $mdSidenav, $rootScope, $filter,$mdDialog) {
  $scope.toggle = function() {
    if (document.getElementById("mySidenav").style.width == "0px") {
      openNav();
    } else {
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0px";
  }
  $scope.manufacturerArray = [];
  $scope.storageArray = [];
  $scope.osArray = [];
  $scope.cameraArray = [];

  angular.forEach($rootScope.json, function(value, key) {
    $scope.manufacturerArray.push(value.specs.manufacturer);
    $scope.manufacturer = $scope.manufacturerArray.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
  });

  angular.forEach($rootScope.json, function(value, key) {
    $scope.storageArray.push(value.specs.storage);
    $scope.storage = $scope.storageArray.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
  });

  angular.forEach($rootScope.json, function(value, key) {
    $scope.osArray.push(value.specs.os);
    $scope.os = $scope.osArray.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
  });

  angular.forEach($rootScope.json, function(value, key) {
    $scope.cameraArray.push(value.specs.camera);
    $scope.camera = $scope.cameraArray.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
  });$mdDialog

  $rootScope.manufacturerArray1 = [];
  $rootScope.storageArray1 = [];
  $rootScope.osArray1 = [];
  $rootScope.cameraArray1 = [];


  $scope.toggle1 = function(json, list) {
    var idx = list.indexOf(json);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(json);
    }
  };
});

  // $scope.showAdvanced = function(ev,jsonObject) {
  //   $mdDialog.show({
  //     // console.log('2');
  //     // controller: DialogController,
  //     templateUrl: 'templates/popup.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true,
  //     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  //     locals: {
  //                   theScope: jsonObject
  //               }
  //
  //
  //
  //   })
  //   .then(function(answer) {
  //     $scope.status = 'You said the information was "' + answer + '".';
  //   }, function() {
  //     $scope.status = 'You cancelled the dialog.';
  //   });
  // };


  // $scope.showAdvanced = function((ev,jsonObject) {
	// 	$scope.ev = ev;
	// 	$scope.jsonObject = jsonObject
	// 	 $mdDialog.show({
	// 		templateUrl : 'templates/popup.html',
	// 		scope : $scope,
  //     targetEvent: ev,
	// 		backdrop : false,
	// 		animation : true
	// 	});
	// }



app.filter('myFormat', function() {
  var selected = [];
  return function(json, manufacturerArray1, storageArray1, osArray1, cameraArray1) {
    var selected = [];
    if (manufacturerArray1.length > 0) {
      for (var j = 0; j < json.length; j++) {
        for (var i = 0; i < manufacturerArray1.length; i++) {
          var name = manufacturerArray1[i];
          var objectName = json[j];
          var manufactureNameInJson = objectName.specs.manufacturer;
          if (manufactureNameInJson == name) {
            selected.push(objectName);
          }
        }
      }
    } else {
      selected = json;
    }
    if (storageArray1.length > 0) {
      var indexArray = [];
      for (var j = 0; j < selected.length; j++) {
        var b = false;

        var storageObjectName = selected[j];
        var storageNameInObject = storageObjectName.specs.storage;
        for (var k = 0; k < storageArray1.length; k++) {
          if (storageNameInObject == storageArray1[k]) {
            b = true;
            break;
          }
        }
        if (b) {
          indexArray.push(storageObjectName);
        }
      }
      selected = indexArray;
    }
    if (osArray1.length > 0) {
      var indexArray = [];

      for (var j = 0; j < selected.length; j++) {
        var b = false;
        var osObjectName = selected[j];
        var osNameInObject = osObjectName.specs.os;
        for (var r = 0; r < osArray1.length; r++) {
          if (osNameInObject == osArray1[r]) {
            b = true;
            break;
          }
        }
        if (b) {
          indexArray.push(osObjectName);
        }
      }
      selected = indexArray;
    }
    if (cameraArray1.length > 0) {
      var indexArray = [];
      for (var j = 0; j < selected.length; j++) {
        var b = false;
        var cameraObjectName = selected[j];
        var cameraNameInObject = cameraObjectName.specs.camera;
        for (var r = 0; r < cameraArray1.length; r++) {
          if (cameraNameInObject == cameraArray1[r]) {
            b = true;
            break;
          }
        }
        if (b) {
          indexArray.push(cameraObjectName);
        }
      }
      selected = indexArray;
    }
    return selected;
  };
});
