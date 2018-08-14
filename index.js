var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 4000;
var database = require('./database');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
//mongo ds133084.mlab.com:33084/users -u kashif -p kashif1


database.connect();
app.listen(port,function(){

    console.log("Server is running on port: "+port);
});