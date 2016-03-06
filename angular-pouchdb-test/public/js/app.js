'use strict';

var angular = require('angular');

var app = angular.module('app', ['pouchdb']);

app.controller('AppController', function($scope, pouchDB) {
    
    var db = pouchDB('test');
    var shouldPut = true;
    var doc = { _id: '1', clicks: 1 };

    function updateClickCounter() {
      $scope.clicks = doc.clicks;
    }

    // init
    db.get(doc._id).then(function(found) {
      doc = found;
    })
    .finally(updateClickCounter);

    // click handler
    $scope.click = function() {
      doc.clicks++;
      db.put(doc).then(function(res) {
        doc._rev = res.rev;
        updateClickCounter();
      });
    };

  });
