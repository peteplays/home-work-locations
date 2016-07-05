//@ngInject
var _ = require('underscore');
module.exports = ['NgMap', '$scope' ,function(NgMap, $scope) {
    $scope.gMap = { 
        url: 'https://maps.google.com/maps/api/js', 
        urlApi: 'https://maps.googleapis.com/maps/api/js?key=', 
        mKey: 'AIzaSyAOcSWYKgXmXWT6R5Ry9ZgCojK286at24U', 
        placesLib: '&libraries=places', 
        center: '32.8070014,-79.9731229' 
    };
    // $scope.mapParams = { 
    //     home: {
    //         loc: null,
    //         radius: 1000 
    //     },
    //     work: {
    //         loc: null,
    //         radius: 500
    //     },
    //     fillOpacity: 0.2,
    //     strokeOpacity: 0.35
    // };

    NgMap.getMap().then(function (map) {
        $scope.map = map;
    });
    $scope.placeMarker = function (e) {
        var cords = e.latLng.lat() +', '+e.latLng.lng();
        var marker = new google.maps.Marker({position: e.latLng, map: $scope.map});
        $scope.map.panTo(e.latLng);
        $scope.$emit('markerCords', cords);
        console.log($scope.positions);
    };

}];