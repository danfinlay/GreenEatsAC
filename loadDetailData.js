
var urlData = getUrlVars();
var locationId = unescape(urlData["id"]);
var items = [];
var ask = new String();
console.log("Starting..");
var violation;
violations.forEach(function(checker){
	if(checker.name===locationId){
		console.log("Found id:");
		violation = checker;
	}
});

if(violation!==undefined){
	if(violation.violations){
		ask = '<img src="skeptical.png">';
	} else {
		ask = '<img src="good.png">';
	};
	//$.each(data, function(key, val) {
	//items.push('<li id="' + key + '">' + val + '</li>');
	//for(thing in violation){

		//console.log("Loading "+thing+" which is "+violation[thing]);
	
		//$('ul').append('<li><a>'+thing+': '+violation[thing]+'</a></li>');
			
		$('body').append('<h3>' + violation.name +'</h3><p>' + violation.adress + '</p><p>' + violation.city + '</p><p class="ui-li-aside">' + ask + '</p></a>');


		//$('ul').append('<li><h3>' + violation.name +'</h3><p>' + violation.adress + '</p><p>' + violation.city + '</p><p class="ui-li-aside">' + ask + '</p></a></li>');
	//};
}else{
	console.log("Violation not found.");
}

		


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}