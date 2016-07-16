var _ = require('underscore');
module.exports = function ($scope, $http) {

    $scope.getDBCheck = function () {
        $http.get('/dbCheck')
            .then(function (response) {
                if (response.data.db == 'ok') {
                    $scope.getDBCount();
                } else {
                    $scope.dbActive = false;
                    console.log(response.data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    $scope.getDBCount = function () {
        name = name.toLowerCase();
        $http.get('/dbCount')
            .then(function (response) {
                $scope.outputDBCountRes = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    $scope.getMapData = function () {
        $http.get('/dbGetAllData')
            .then(function (response) {
                $scope.outputGetData = response.data;
                $scope.dbLocations = response.data;
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    $scope.dbInsert = function (data) {
        if (data) {
            $http.post('/dbInsert', data)
                .then(function (response) {
                    $scope.outputInsertNameRes = response.data;
                    $scope.getDBCount();
                    $scope.getMapData();
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    };

    // TODO
    // $scope.postUpdateVal = function(name, color) {
    //     if(name) {
    //         name = name.toLowerCase();
    //         var data = {
    //             name: name,
    //             color: color
    //         };
    //         $http.post('/dbUpdate', data)
    //             .then(function(response) {
    //                 $scope.outputUpdateNameRes = response.data;
    //                 $scope.getMapData();
    //             })
    //             .catch(function(err) {
    //                 console.log(err);
    //             });
    //     }
    // };

    //-- check for active db
    $scope.getDBCheck();

};
