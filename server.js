var ajax = require("./mail.js");
var connect = require('connect');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var app = connect();
var port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/templates', genericResponse);
app.use('/lists', genericResponse);
app.use('/reports', genericResponse);
app.use('/campaigns', genericResponse);
app.use('/campaignNew', campaignNew);
app.use(serveStatic(__dirname));

app.listen(port, serverActive);

function serverActive() {console.log("listening on port: ", port);}

function genericResponse(req, res) {
	console.log("call to: " + req._parsedUrl.path);
	ajax.makeCall("https://us13.api.mailchimp.com/3.0" + req._parsedUrl.path, function(data) {
		res.end(data);
	});
}

function campaignNew(req, res){
	console.log("call to: " + req._parsedUrl.path);
	console.log(req.body);
	ajax.makeCall("https://us13.api.mailchimp.com/3.0/campaigns/b6e4a7f563/actions/test", function(data) {
		res.end(data);
	}, req.body);
}