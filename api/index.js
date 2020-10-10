'use strict';
const express = require('express');
// App
const app = express();
var ip = '172.17.0.2';
var h = '0.0.0.0';
// Constants
const PORT = 8080;
const HOST = h;

var body_parser = require('body-parser').json();
const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host:  ip,
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'db_p8'
});
mc.connect();


app.get('/viewAlumno', (req, res) => {
	mc.query("Select * from Alumno",function (err, result, fields) {
    if (err) {throw err;}
    else{
    	res.send(result);	
	}
	});
});


app.post('/insertAlumno',body_parser, function (req, res) {

	var dpi = req.body.dpi || '';
    var carnet = req.body.carnet || '';
    var nombre = req.body.nombre || '';
    var apellido = req.body.apellido || '';
    var email = req.body.email || '';
    var telefono = req.body.telefono || ''; 

	var query = 'insert into Alumno(carnet,dpi,nombre,apellido,email,telefono) values('+carnet+','+dpi+',"'+nombre+'","'+apellido+'","'+email+'","'+telefono+'");'
  	  mc.query(query, function (err, result) {
    if (err){res.send("FAIL!!!!");throw err;}
    else{
    	res.send("SUCCESS");}
  });
});

app.get('/',(req, res) => {
    res.send("HELLO WORLD")
});



app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);