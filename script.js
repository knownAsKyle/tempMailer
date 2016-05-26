(function() {

	var emailData = {
		"test_emails": ["kyle.uhan@gmail.com", "uhan@dciartform.com"],
		"send_type": "html"
	};
	var allTemplatesWrapper = document.getElementById("allTemplatesWrapper");
	var actionButtons = document.getElementsByClassName("actionButton");

	for (var i = 0, len = actionButtons.length; i < len; i++) {
		actionButtons[i].addEventListener("click", handleActionButtonClick);
	}

	var display = {};
	display.templates = buildTemplateView;
	display.lists = buildListView;
	display.reports = buildReportView;
	display.campaigns = buildCampaignsView;
	display.campaignNew = buildCampaignsNewView;


	function handleActionButtonClick(e) {
		allTemplatesWrapper.style.display = "none";
		allTemplatesWrapper.innerHTML = "";
		if (e.target.id !== "campaignNew") {
			callAjax("/" + e.target.id, "GET", null, display[e.target.id]);
		} else {
			callAjax("/" + e.target.id, "POST", JSON.stringify(emailData), display[e.target.id]);
		}
	}


	function callAjax(url, method, data, callback) {
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open(method, url, true);
		xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				callback(xmlhttp.responseText);
			}
		};
		xmlhttp.send(data);
	}


	function buildTemplateView(data) {
		try {
			data = JSON.parse(data);
			console.log(data);
			data = data.templates;
		} catch (err) {
			console.log("could not parse returned json");
			return false;
		}
		for (var i = 0, len = data.length; i < len; i++) {
			var wrapper = document.createElement("div");
			var header = document.createElement("h3");
			var link = document.createElement("a");
			var image = document.createElement("img");
			header.className = "templateHeader";
			wrapper.className = "templateWrapper";


			header.innerHTML = data[i].name;
			image.src = data[i].thumbnail;
			link.href = data[i].thumbnail;

			link.appendChild(image);
			wrapper.appendChild(header);
			wrapper.appendChild(link);
			allTemplatesWrapper.appendChild(wrapper);
		}

		allTemplatesWrapper.style.display = "block";
	}

	function buildListView(data) {
		try {
			data = JSON.parse(data);
			console.log(data);
		} catch (err) {
			console.log("could not parse returned json");
			return false;
		}
	}

	function buildReportView(data) {
		try {
			data = JSON.parse(data);
			console.log(data);
		} catch (err) {
			console.log("could not parse returned json");
			return false;
		}
	}

	function buildCampaignsView(data) {
		try {
			data = JSON.parse(data);
			console.log(data);
		} catch (err) {
			console.log("could not parse returned json");
			return false;
		}
	}

	function buildCampaignsNewView(data) {
		try {
			data = JSON.parse(data);
			console.log(data);
		} catch (err) {
			console.log("could not parse returned json");
			return false;
		}
	}
})();