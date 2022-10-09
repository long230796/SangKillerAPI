var express	= require('express');
var dataRoute = require('./routes/data.route');
var mongoose = require('mongoose')
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/express-demo')
var port = 3000;

var app = express();
app.use(express.json()) // for parsing application/json
// app.use(mongoSanitize());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use('/data', dataRoute);  

app.listen(port, function() {
	console.log('server listening on port ' + port);
});
