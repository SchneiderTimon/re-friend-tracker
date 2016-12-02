import {PersonDatabase} from "./database/person-database";

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use('/', [express.static(__dirname + './../')]);

// database
let personDatabase:PersonDatabase = new PersonDatabase();

app.get('/services/ping', function(req, res) {
    res.json({ status: 'ok', userId : 'demo', version: '0.0.1' });
});

app.get('/services/person', function(req, res) {
    res.json(personDatabase.list());
});

app.get('/services/person/:personKey', function(req, res) {
    res.json(personDatabase.read(parseInt(req.params.personKey)));
});

app.post('/services/person', function(req, res) {
    res.json(personDatabase.create(req.body));
});

app.put('/services/person/:personKey', function(req, res) {
    res.json(personDatabase.update(parseInt(req.params.personKey), req.body));
});

app.delete('/services/person/:personKey', function(req, res) {
    res.json(personDatabase.delete(parseInt(req.params.personKey)));
});

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('../index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});