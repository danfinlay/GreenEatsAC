

<script>

$.on("load", function(event, ui){
	
	function getIssuesForId(id){
	$.getJSON("violations.js", {name: id}, function(json) {
    	alert("JSON Data: " + json.violations);
		var items = [];
		var ask = new String();
		
		if(violation.violations){
					ask = "Ask about Violations";
					} else {
					ask = "Clean Record";
					};
    	//$.each(data, function(key, val) {
    	//items.push('<li id="' + key + '">' + val + '</li>');
		$.each(json, function(){
		items.push('<li><h3>' + violation.name +'</h3><p>' + violation.adress + '</p><p>' + violation.city + '</p><p class="ui-li-aside"><strong>' + ask + '</strong>PM</p></a></li>');
  	});
  })
