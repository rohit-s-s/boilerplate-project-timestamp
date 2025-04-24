// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.post("/api/:date",(req,res)=>{
  const param = new Date(req.params.date)
  const date = param.getDate()
  const month = param.getMonth()
  const yaer = param.getFullYear()
  const UNIX = new Date(Date.UTC(yaer, month, date)).getTime()
  const UTC = new Date(Date.UTC(yaer, month, date)).toUTCString()
  res.json({
      unix:UNIX, utc: UTC
  })
} )


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
