//@ngInject
var db = require('../../resources/db/mongodb/mongoDBUI.js');
var _ = require('underscore');
module.exports = ['$scope', '$http','NgMap',function($scope, $http, NgMap) {
    $scope.dbLocations = [];
    $scope.gMap = { 
    	url: 'https://maps.google.com/maps/api/js', 
    	urlApi: 'https://maps.googleapis.com/maps/api/js?key=', 
    	mKey: 'AIzaSyAOcSWYKgXmXWT6R5Ry9ZgCojK286at24U', 
    	placesLib: '&libraries=places', 
    	center: '32.8070014,-79.9731229' 
    };
    $scope.mapParams = { 
		home: {
			loc: null,
			radius: 1000 
		},
		work: {
			loc: null,
			radius: 500
		},
		fillOpacity: 0.2,
		strokeOpacity: 0.35
	};
	$scope.plays = {
	  	link: 'http://peteplays.com/',
	  	logoSrc: 'images/playslogo.png',
	  	logoAlt: 'PetePlays'
	};

   
    $scope.updateRadius = function(loc, newRadius) {
    	if( loc == 'home' ) {
    		$scope.mapParams.home.radius = newRadius;
    	} else {
    		$scope.mapParams.work.radius = newRadius;
    	}
    };

    $scope.submitData = function() {
    	//-- add locally
    	$scope.dbLocations.push(
    		{
    			"name" : $scope.currentUser,
    			"email" : "TESTER@qwe.com",
    			"home" : $scope.homeLocInput.geometry.viewport.f.b +','+ $scope.homeLocInput.geometry.viewport.b.f,
    			"home_radius" : $scope.mapParams.home.radius,
    			"work" : $scope.workLocInput.geometry.viewport.f.b +','+ $scope.workLocInput.geometry.viewport.b.f,
    			"work_radius" : $scope.mapParams.work.radius,
    			"dts" : (new Date()).toJSON()
    		}
    	);
    	//-- add to db
    	$scope.dbInsert(_.last($scope.dbLocations));

    	$scope.showSideBar = false;
    	$scope.clearInputs();
    };

    $scope.clearInputs = function() {
    	$scope.currentUser = null;
    	$scope.homeLocInput = null;
    	$scope.workLocInput = null;
    	$scope.inputMapData.$setPristine();
    };

    $scope.dbActive = false;
	//-- call db
    db($scope, $http);
    //-- populate map
    $scope.getMapData();
}];