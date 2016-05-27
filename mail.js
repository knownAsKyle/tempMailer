var Ajax = function() {
	this.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	this.apikey = "apikey 43d2de8d65e47e0521bf1c4deca52a18-us13";
};

var p = Ajax.prototype;

p.makeCall = function(url, callback, post) {
	if(post){
		post = JSON.stringify(post);
	}
	var xmlhttp = new this.XMLHttpRequest();
	console.log("url " + url + " -- pst " + post);
	if(post){
		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("content-type", "application/json");
	}else{
		xmlhttp.open("GET", url, true);
	}
	xmlhttp.setRequestHeader("Authorization", this.apikey);
	xmlhttp.onreadystatechange = function() {
		console.log("Status: ", xmlhttp.status);
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			callback(xmlhttp.responseText);
		}else if(xmlhttp.readyState === 4 && xmlhttp.status === 406){
			callback(xmlhttp.responseText);
		}else if(xmlhttp.status === 204){
			callback(xmlhttp.responseText);
		}
	};
	xmlhttp.send(post);
};
module.exports = new Ajax();