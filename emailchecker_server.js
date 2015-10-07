var http	= require('http');
var url		= require('url');
var qs  = require('querystring');
var sport	= 5000;
http.createServer(function (req,res){
	//console.log(req);
	var requrl	= url.parse(req.url);
	var query   = qs.parse(requrl.query);
	console.log(query);
	res.writeHead(200,{"Content-type":"text/plain"});
	
	var emailtocheck	= query['email'];
	console.log(emailtocheck);
	if (emailtocheck != "" && emailtocheck != undefined){
		var emx	= require('email-existence');
		emx.check(emailtocheck, function(error,result){
			error	= error.replace(/(\r\n|\n|\r)/g," ");
			console.log('error	:\n'+error);
			console.log('res  	:\n'+result);
			res.write("{'status':"+result+",'email' : '"+emailtocheck+"','errormsg':'"+error+"'}");
			res.end();
		});
	}else{
		res.write("{'status':false}");
		res.end();
	}
}).listen(sport);
console.log("server open at port "+sport);

