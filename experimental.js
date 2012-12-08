(function() {
  window.randomly = function() {
    return Math.round(Math.random()) - 0.5;
  };
  Number.prototype.toRadians = function() {
    return this * 2 * Math.PI / 360;
  };
  $(function() {
    var geoErrors, searchNearMe, showPlacesNearMe, _lat, _lmt, _lng;
    _lat = 37.78464995488294;
    _lng = -122.29868805046627;
    _lmt = .001;
    searchNearMe = function(dataLocation, lat, lng, distance) {
      var l, res, _i, _len, _ref;
      if (distance == null) {
        distance = .001;
      }
      res = [];
      _ref = window[dataLocation] || window.violations;
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
    geoErrors = function(error) {
      var $errorDiv;
      console.log(error);
      $errorDiv = $("#errors");
      switch (error.code) {
        case 1:
          $errorDiv.text("You declined to tell us your location :(");
          return console.log("declined");
        case 3:
          $errorDiv.text("Timeout :(");
          return console.log("timeout");
      }
    };
    showPlacesNearMe = function(position) {
      var $b, here, nearMe, place, tmpl, _i, _len;
      here = "" + position.coords.latitude + "," + position.coords.longitude;
      $("h3").text(here);
      $("h3").append("<img src=\"http://maps.googleapis.com/maps/api/staticmap?center=" + here + "&zoom=16&size=400x400&sensor=true\" />");
      nearMe = searchNearMe("violations", position.coords.latitude, position.coords.longitude);
      console.log(nearMe);
      for (_i = 0, _len = nearMe.length; _i < _len; _i++) {
        place = nearMe[_i];
        $b = $("<b>").text(place.name);
        tmpl = "<li><a href='detail.html?id=" + place.name + "'>" + place.name + "</a></li>";
        $("#names").append($(tmpl));
      }
      return true;
    };
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPlacesNearMe, geoErrors, {
        enableHighAccuracy: true
      });
    }
<<<<<<< HEAD
    return true;
  };
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPlacesNearMe, geoErrors, {
      enableHighAccuracy: true
    });
  }
});
=======
  });
}).call(this);
>>>>>>> 47f90b9d62f76b254edc03029d37895b148714fb
