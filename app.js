var express = require('express')
const app = express();
var port = process.env.PORT || '3000';
var path = require('path');

app.use(express.static('public'));

//app.set ('view engine' , 'html');

//app.get('/', function(req,res) {
//    res.send('Hello World')
//})

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname+'/public/หน้าหลัก.html'));
})

app.get('/home', function(req,res) {
    res.sendFile(path.join(__dirname+'/public/หน้าหลัก'));
})

app.get('/gallery', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/แกลอรี่'));
})

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/ช่องทางการติดต่อ'));
})

app.get('/map', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/แผนที่'));
})

app.get('/logo', (req,res) => {
    res.sendFile(path.join(__dirname+'/public/logo2.png'));
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
  next(err);
});

app.listen(port)
