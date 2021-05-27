var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);
T.post('statuses/update', {status : 'My First Tweet using Bot'}, function(err, data, response){

  console.log(data)

}); 
