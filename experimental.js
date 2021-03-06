(function() {
  var EARTH_RADIUS;
  window.randomly = function() {
    return Math.round(Math.random()) - 0.5;
  };
  Number.prototype.toRadians = function() {
    return this * 2 * Math.PI / 360;
  };
  EARTH_RADIUS = {
    kilometers: 6378.135,
    miles: 3963.1676
  };
  $(function() {
    var geoErrors, haversine, searchNearMe, showPlacesNearMe, _lat, _lmt, _lng;
    _lat = 37.78464995488294;
    _lng = -122.29868805046627;
    _lmt = .001;
    haversine = function(from, to, units) {
      var a, c, d, from_, from_latitude, from_longitude, latitude_delta, longitude_delta, to_, to_latitude, to_longitude;
      if (units == null) {
        units = 'miles';
      }
      if (typeof from === "string" && typeof from === "string") {
        from_ = from.split(/,\s*/);
        from_longitude = parseFloat(from_[0]).toRadians();
        from_latitude = parseFloat(from_[1]).toRadians();
        to_ = to.split(/,\s*/);
        to_longitude = parseFloat(to_[0]).toRadians();
        to_latitude = parseFloat(to_[1]).toRadians();
      } else {
        from_longitude = from.longitude.toRadians;
        from_latitude = from.latitude.toRadians;
        to_longitude = to.longitude.toRadians;
        to_latitude = to.latitude.toRadians;
      }
      latitude_delta = to_latitude - from_latitude;
      longitude_delta = to_longitude - from_longitude;
      a = Math.pow(Math.sin(latitude_delta / 2), 2) + Math.cos(from_latitude) * Math.cos(to_latitude) * Math.pow(Math.sin(longitude_delta / 2), 2);
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return d = EARTH_RADIUS[units] * c;
    };
    searchNearMe = function(dataLocation, lat_, lng_, distance) {
      var h, l, lat, lng, res, _i, _len, _ref;
      if (distance == null) {
        distance = .25;
      }
      res = [];
      _ref = window[dataLocation] || window.violations;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        l = _ref[_i];
        lat = parseFloat(l.lat);
        lng = parseFloat(l.lng);
        h = haversine("" + lat + "," + lng, "" + lat_ + "," + lng_);
        if (h < distance) {
          res.push(l);
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
      var $b, $tmpl, esc, here, nearMe, place, tmpl, violationsClass, _i, _len;
      here = "" + position.coords.latitude + "," + position.coords.longitude;
      $("h3").text("");
      $("h3").append("<img id=\"whereAmiIMap\" src=\"http://maps.googleapis.com/maps/api/staticmap?center=" + here + "&zoom=16&size=400x400&sensor=true\" />");
      nearMe = searchNearMe("violations", position.coords.latitude, position.coords.longitude, .5);
      for (_i = 0, _len = nearMe.length; _i < _len; _i++) {
        place = nearMe[_i];
        $b = $("<b>").text(place.name);
        esc = escape(place.name);
        violationsClass = place.violations ? "violations" : "smiles";
        tmpl = "<li data-ajax='false' class=" + violationsClass + "><a data-ajax='false' href='detail.html?id=" + esc + "'>" + place.name + "</a></li>";
        $tmpl = $(tmpl);
        if (place.violations) {
          console.log(place.name);
          $tmpl = $tmpl.find("a").addClass("violations");
        }
        $("#theList").append($(tmpl));
        $("#theList").listview('refresh');
      }
      return true;
    };
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(showPlacesNearMe, geoErrors, {
        enableHighAccuracy: true
      });
    }
  });
}).call(this);
