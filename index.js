let express = require('express');
let chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');


let app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/frontend', 'index.html'));
});

app.listen(3000, function (req, res) {
    debug(`running at port ${chalk.green('3000')}`);
})