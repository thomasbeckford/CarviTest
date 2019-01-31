const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const https = require('https');
let request = require('request');


app.get('/api/cars', function(req, res, next) {
  var name = req.query.name;
  console.log(req.params);
  request('https://api.carvi.com/api/v2/cars?search_input=' + name , function (error, response, body) {
    let bodyParsed = JSON.parse(body);
      if (!error && response.statusCode == 200) {
        cars = bodyParsed.page;
           res.send( cars );
      }
  });
});



app.get('/api/cars/:id', function(req, res, next) {
  id = req.params.id;
  request('https://api.carvi.com/api/v2/cars/' + id, function (error, response, body) {
    idcar = JSON.parse(body);
       if (!error && response.statusCode == 200) {
           res.send( idcar );
        }
   });
});



app.get('/api/brands', function(req, res, next) {
  request('https://api.carvi.com/api/v2/brands', function (error, response, body) {
    let brands = JSON.parse(body);
       if (!error && response.statusCode == 200) {
           res.send( brands );
        }
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
