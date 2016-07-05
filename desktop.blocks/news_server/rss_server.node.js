var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

function pDownload (url, dest) {

  var file = fs.createWriteStream(dest);
  return new Promise((resolve, reject) => {
    var responseSent = false; // flag to make sure that response is sent only once.
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () =>{
        file.close(() => {
          if(responseSent)  return;
          responseSent = true;
          resolve();
        });
      });
    }).on('error', err => {
        if(responseSent)  return;
        responseSent = true;
        reject(err);
    });
  });
}

function getRSS(url, folder) {

  //Get date and time
  var d = new Date();

  //rss
  pDownload(url, folder)
    .then( ()=> console.log(d.toLocaleString() + '... downloaded file no issues...'))
    .catch( e => console.error(d.toLocaleString() + '... error while downloading', e));

}

//Set time interval in min to refresh rss feed    
var time_min = 60;

//Set url for rss
var rss_url = 'https://news.yandex.ru/business.rss';

//Set folder to save
var rss_folder = '../../desktop.bundles/main_page/business.rss';

//Start rss server
app.listen(1337, function(){
    console.log('Express server listening on port 1337');

    var timerId = setTimeout(function tick() {
      getRSS(rss_url, rss_folder);

      timerId = setTimeout(tick, time_min * 60 * 1000);
    }, time_min * 60 * 1000);
});
    





