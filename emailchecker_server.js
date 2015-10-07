
var emx	= require('email-existence');
emx.check('okierie@yahoo.com', function(error,res){
	console.log('error	:\n'+error);
	console.log('res  	:\n'+res);
});
//mta1264.mail.ne1.yahoo.com
