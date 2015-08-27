var Promise = require('bluebird');
var nodemailer = require('nodemailer');
var moment = require('moment');
var marked = require('marked');

module.exports={
	home:function(req,res,next) {
		req.locale = req.locale || 'en'
		moment.locale(req.locale);
		
	
		console.log('HOME');

		res.send('HOME')


	},


}
