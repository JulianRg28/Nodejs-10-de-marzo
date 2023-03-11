//function greet(name){
//  return `Hello, ${name}`;
//}

//console.log(greet("Node.js"));

//hyper text transfer protocol
//interpolacion ``
/*
var
let
const
*/

//Crear servidor local para mostrar mensaje en pantalla
/*

const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end('Hello NodeJS ADSO')
}).listen(8080);

//charset (Conjunto de caracteres)

*/
/*const datetime = require('./datetime.js');
const http = require('http');


http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
  res.write(datetime.myDateTime())
  //res.end()
}).listen(8080);
*/

//console.log(datetime.myDateTime());
//query
// SEO SEARCH ENGINE OPTIMIZATION

const http = require('http');
const fs = require('fs');


http.createServer(function(req, res){
  fs.readFile('index.html', function(err, data){
    res.writeHead(200,{'Content-Type' : 'text/html;charset= utf-8'});
    res.write(data);
    return res.end();
  });
 
}).listen(8080);




