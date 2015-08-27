var Promise = require('bluebird');
var nodemailer = require('nodemailer');
var moment = require('moment');
var marked = require('marked');
var fs = require('fs')

module.exports={
	home:function(req,res,next) {
		req.locale = req.locale || 'en'
		moment.locale(req.locale);
		
	
		console.log('HOME');

		var imgName = fs.readdirSync('uploads/Min');

		console.log(imgName);

// Aurrillac2015-(1-sur-178).jpg





		res.render('index',{imagesNames : imgName})


	},


}
