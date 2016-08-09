var express = require('express');
var path = require('path');
var request = require('request');

var router = express.Router();

var navcontent={};

router.get('*', function(req, res) {
  //Get navigation data
  request({
  	url: 'https://demo1045116.mockable.io/menu',
  	json: true 
  },function(error,response,body){
  		if (!error && response.statusCode === 200) {
        	res.json(body);
        }
  });
});

module.exports = router;
