/*
	Noting to really do with this project specifically...

	/Common 	  <-- Base classes to be used for composition (extended)
	/Interfaces   <-- Used to describe (implement) all classes w/ the possible exception of Common
	/Logic
		/Controllers  <-- convention: className.controller.ts
		/Models       <-- convention: className.model.ts
		/Views        <-- convention: className.view.ts
	/Assets       <-- Used to store assets (imgs/videos/possibly data)
	/Styles       <-- style.scss



*/

//http://developer.mailchimp.com/documentation/mailchimp/reference/overview/

    var url = "https://us13.api.mailchimp.com/3.0/";
    var data = {};
    var sendMailBtn = document.getElementById("mailButton");
    sendMailBtn.addEventListener("click", sendMail);
    //43d2de8d65e47e0521bf1c4deca52a18-us13
    function sendMail() {
        // callAjax(url, function(e) {
        //     console.log("back", e)
        // });
        var ajaxSettings = {};
        ajaxSettings.url = url;
        // ajaxSettings.data = data;
        ajaxSettings.dataType = "jsonp";
        ajaxSettings.method = "GET";
        ajaxSettings.beforeSend = function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("43d2de8d65e47e0521bf1c4deca52a18-us13")); 
            // xhr.setRequestHeader("Authorization", "apikey: 43d2de8d65e47e0521bf1c4deca52a18-us13"); 
        };
        ajaxSettings.error = function(err) {
            console.log("error: ", err);
        };
        ajaxSettings.success = function(res) {
            console.log("worked: ", res);
        };
        $.ajax(ajaxSettings);
        // $.post(url, data, function(data, response) {
        // 	console.log(data, response);
        // });
    }

    function callAjax(url, callback) {
        var xmlhttp;
        // compatible with IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        if(xmlhttp){

        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", url, true, "apikey","43d2de8d65e47e0521bf1c4deca52a18-us13");
        xmlhttp.send();
    }

    function responseFunction(a) {
        console.log("response: ", a)
    }

