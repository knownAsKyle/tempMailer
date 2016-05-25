(function() {
	var url = "http://us13.api.mailchimp.com/3.0/templates";
	var data = {};
	var sendMailBtn = document.getElementById("mailButton");

	sendMailBtn.addEventListener("click", sendMail);
//43d2de8d65e47e0521bf1c4deca52a18-us13
	function sendMail() {
		var ajaxSettings = {};
		ajaxSettings.url = url;
		ajaxSettings.data = data;
		ajaxSettings.method = "GET";
		ajaxSettings.beforeSend = function(xhr){
			xhr.setRequestHeader("Authorization", "Basic " + btoa("apikey: 43d2de8d65e47e0521bf1c4deca52a18-us13")); 
			// xhr.setRequestHeader("Authorization", "apikey: 43d2de8d65e47e0521bf1c4deca52a18-us13"); 
		};
		ajaxSettings.error = function(err){
			console.log("error: ", err);
		};
		ajaxSettings.success = function(res){
			console.log("worked: ", res);
		};

		$.ajax(ajaxSettings);

		// $.post(url, data, function(data, response) {
		// 	console.log(data, response);
		// });
	}
})();