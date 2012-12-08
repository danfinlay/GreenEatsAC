# (e) -> 
# 	$.ajax
# 		url: 'file42.php'
# 		sucsess: (data) => 
# 			console.log(data)
# 			if($(e.target).attr("id")=="fishType")
# 				data.map (num) ->
# 					num%2==0 or num%3==2
# 		error: -> 
# 			console.log(arguments)

#imgs = document.images 
#(break if img.attr(id)[/candi/]) for img in imgs
# isOdd = (num) -> num%2 is 1
# b = (x  === x for x in a)
# myFunction = (gm,y,f...,g) ->  "do some work here"
# class Book
# 	constructor: (@name = "List of Books") -> 
# 	published: (y = 2010, m = 6, d = 15 ) ->  new Data(y,m,d)
# b = new Book("Smiles")
# class Item
# 	constructor: (@blob) ->
# 	inspect: -> console.log(@blob.name,@blob.price,@blob.count)
# 	price: (price) -> if price? then @blob.price = price else @blob.price
# 	debug: -> @blob


# name = "Widget"
# price = 0.99
# count = 21312312
# item = new Item({name,price,count})
# d_item = new Item({name: "Discount Widget", price: price/2, count})
# item.inspect()
# d_item.inspect()
# console.log(item.blob())

# String::supplant = (o) ->
# 	@.replace(new RegExp("{([^{}]*)}","g"), 
# 		(a,b) ->
# 		r=o[b]
# #typeof r=='string'|| if typeof r=='number' then r else a
# String::supplant = (o) ->
#   @replace /{([^{}]*)}/g, (a, b) ->
#     r = o[b]
#     (if typeof r is "string" or typeof r is "number" then r else a)
# navigator.geolocation.getCurrentPosition(function(position){
# 	console.log(position);
# 	$("img").attr("src",mapUrl+position.coords.latitude+","+position.coords.longitude)
# })

window.randomly = () -> (Math.round(Math.random())-0.5)
Number::toRadians = () -> @*2*Math.PI/360

# class LocationHistory 

# 	constructor: (name = "Name", load  = false, onUpdate) ->
# 		if not navigator.geolocation
# 			return "not supported"
# 		@name = name
# 		@times = []
# 		@locations = []
EARTH_RADIUS = { kilometers: 6378.135, miles: 3963.1676 }
# 		if(load)
# 			item = localStorage.getItem(@name)
# 			item = JSON.parse(item)
# 			for k,v in item
# 				@times.push(k);
# 				@locations.push(v);
# 		@interval = setInterval =>
# 			navigator.geolocation.getCurrentPosition (position) =>
# 				here = "#{position.coords.latitude},#{position.coords.longitude}"
# 				if(@movedFrom here)
# 					@add(Date().valueOf(), here)
# 					onUpdate(position,here);
# 			,(error) ->
# 				console.log(error)
# 				switch(error.code)
# 					when 1 
# 						console.log("declined")
# 					when 3 
# 						console.log("timeout")
# 			,enableHighAccuracy: true
# 		,1000
# 		null
	# haversine: (from, to, units = 'miles') ->
	# 	if(typeof from=="string" and typeof from=="string")
	# 		from_ = from.split /,\s*/
	# 		from_longitude = parseFloat(from_[0]).toRadians()
	# 		from_latitude = parseFloat(from_[1]).toRadians()
	# 		to_ = to.split /,\s*/
	# 		to_longitude = parseFloat(to_[0]).toRadians()
	# 		to_latitude = parseFloat(to_[1]).toRadians()

	# 	else
	# 		from_longitude  = from.longitude.toRadians
	# 		from_latitude   = from.latitude.toRadians
	# 		to_longitude    = to.longitude.toRadians
	# 		to_latitude     = to.latitude.toRadians

	# 	latitude_delta  = to_latitude - from_latitude
	# 	longitude_delta = to_longitude - from_longitude

	# 	a = Math.pow(Math.sin(latitude_delta/2),2) +
	# 	Math.cos(from_latitude) *
	# 	Math.cos(to_latitude) *
	# 	Math.pow(Math.sin(longitude_delta/2),2)

	# 	c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
	# 	d = @EARTH_RADIUS[units] * c

# 	add: (time,location) ->
# 		@times.push(time)
# 		@locations.push(location)
# 		null
# 	length: () ->
# 		@times.length
# 	last: () ->
# 		length = @times.length-1 
# 		length = 0 if length == -1
# 		[ @times[length], @locations[length] ]
# 	save: () ->
# 		hash = {}
# 		for i in [0..@times.length]
# 			hash[@times[i]] = @locations[i]
# 		console.log(JSON.stringify(hash))
# 		localStorage.setItem(@name,JSON.stringify(hash))
# 	movedFrom: (location) ->
# 		length = @locations.length - 1 
# 		location != @locations[@locations.length - 1 ] || length==-1
# 	timeAtPoint: (index=-1) ->
# 		(new Date() - new Date(@times[index..]))/1000
# 	distanceFromPoint: (index = -1) ->
# 		@haversine(@location[-2],@location
# 	stopLogging: ->
# 		clearInterval(@interval)

# prettyTime = () ->
# 	now = new Date()
# 	meridian = if now.getHours()<12 then "AM" else "PM"
# 	h = if meridian=="AM" then now.getHours() else now.getHours()-12
# 	date = now.toDateString().split(" ")[1] + " " + now.getDate()
# 	"#{date} #{h}:#{now.getMinutes()}  #{meridian}"

$ () ->

	_lat = 37.78464995488294
	_lng = -122.29868805046627
	_lmt = .001

	# mapFromPoints = (points) ->
		# base = "http://maps.googleapis.com/maps/api/staticmap?size=400x400&sensor=true&markers="
		# for point,index in points
			# base += ""
# markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&
	haversine = (from, to, units = 'miles') ->
		if(typeof from=="string" and typeof from=="string")
			from_ = from.split /,\s*/
			from_longitude = parseFloat(from_[0]).toRadians()
			from_latitude = parseFloat(from_[1]).toRadians()
			to_ = to.split /,\s*/
			to_longitude = parseFloat(to_[0]).toRadians()
			to_latitude = parseFloat(to_[1]).toRadians()

		else
			from_longitude  = from.longitude.toRadians
			from_latitude   = from.latitude.toRadians
			to_longitude    = to.longitude.toRadians
			to_latitude     = to.latitude.toRadians

		latitude_delta  = to_latitude - from_latitude
		longitude_delta = to_longitude - from_longitude

		a = Math.pow(Math.sin(latitude_delta/2),2) +
		Math.cos(from_latitude) *
		Math.cos(to_latitude) *
		Math.pow(Math.sin(longitude_delta/2),2)

		c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
		d = EARTH_RADIUS[units] * c

	searchNearMe = (dataLocation, lat_, lng_, distance = .25 ) ->
		res = []
		for l in window[dataLocation]||window.violations
			lat = parseFloat(l.lat)
			lng = parseFloat(l.lng)
			h = haversine("#{lat},#{lng}","#{lat_},#{lng_}")
			if(h<distance)
				res.push(l)
		res

	geoErrors = (error) ->
		console.log(error)
		$errorDiv = $("#errors")
		switch(error.code)
			when 1
				$errorDiv.text("You declined to tell us your location :(")
				console.log("declined")
			when 3 
				$errorDiv.text("Timeout :(")
				console.log("timeout")
	showPlacesNearMe = (position) ->
		here = "#{position.coords.latitude},#{position.coords.longitude}"
		$("h3").text(here)
		$("h3").append("<img src=\"http://maps.googleapis.com/maps/api/staticmap?center=#{here}&zoom=16&size=400x400&sensor=true\" />")
		nearMe = searchNearMe("violations", position.coords.latitude, position.coords.longitude)
		console.log(nearMe);
		for place in nearMe
			$b = $("<b>").text(place.name)
			tmpl = "<li><a href='detail.html?id=#{place.name}'>#{place.name}</a></li>";
			$tmpl = $(tmpl)
			if place.violations
				console.log(place.name)
				$tmpl.addClass("violations")
			$("#names").append($(tmpl))
		true

	if navigator.geolocation
		navigator.geolocation.getCurrentPosition(showPlacesNearMe,geoErrors, enableHighAccuracy: true)




# setInterval ->
# 	if navigator.geolocation
# 		navigator.geolocation.getCurrentPosition (position) ->
# 			here = "#{position.coords.latitude},#{position.coords.longitude}"
# 			if(window.hash.movedFrom here)
# 				window.hash.add(Date().valueOf(), here)
# 				document.getElementsByTagName("ul")[0].innerHTML+= "<li><b>#{here}</b><em>#{new Date()}</em></li>"
# 		,(error) ->
# 			console.log(error)
# 			switch(error.code)
# 				when 1 
# 					console.log("declined")
# 				when 3 
# 					console.log("timeout")
# 		,enableHighAccuracy: true
# ,1000