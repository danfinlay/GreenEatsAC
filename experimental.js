(function() {
  var searchNearMe, _lat, _lmt, _lng;
  window.randomly = function() {
    return Math.round(Math.random()) - 0.5;
  };
  Number.prototype.toRadians = function() {
    return this * 2 * Math.PI / 360;
  };
  _lat = 37.78464995488294;
  _lng = -122.29868805046627;
  _lmt = .001;
  searchNearMe = function(dataLocation, lat, lng, distance) {
    var l, res, _i, _len, _ref;
    if (distance == null) {
      distance = .001;
    }
    res = [];
    _ref = window["dataLocation"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
      lat = parseFloat(l.lat);
      lng = parseFloat(l.lng);
      if (((_lat + distance) > lat && lat < (_lat - distance))) {
        if (((_lng + distance) > lng && lng < (_lng - distance))) {
          res.push(l);
        }
      }
    }
    return res;
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var here, nearMe, place, _i, _len, _results;
      here = "" + position.coords.latitude + "," + position.coords.longitude;
      nearMe = searchNearMe("ls", position.coords.latitude, position.coords.longitude);
      _results = [];
      for (_i = 0, _len = nearMe.length; _i < _len; _i++) {
        place = nearMe[_i];
        _results.push(console.log(place.name));
      }
      return _results;
    }, function(error) {
      console.log(error);
      switch (error.code) {
        case 1:
          return console.log("declined");
        case 3:
          return console.log("timeout");
      }
    }, {
      enableHighAccuracy: true
    });
  }
}).call(this);
