/*const  http = require('http');
const uc= require('upper-case')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.write(uc.upperCase('hola nodejs'))
    res.end();

}).listen(8080); */

/*const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');
rs.on('open', function(){
    console-console.log('The file is open');

})*/


/*const events = require('events');
const eventEmitter = new events.EventEmitter();

// create an event handler:

const myEventHandler = function() {
    console.log('I hear a scream!');
}

// assign the event handler to an event:

eventEmitter.on('scream', myEventHandler);

// fire the 'scream' event:

eventEmitter.emit('scream'); */

// Upload file

/* const http = require('http');
const  formidable = require('formidable');
const fs = require('fs');


http.createServer(function(req, res){
    if (req.url == '/fileupload') {
     const form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = file.filetoupload.filepath;
        var newpath = 'C:/xampp/node_js' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err){

        });
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        
       /*  res.write('File Upload');
         res.end();*/  
       /*  });

    } else {
      res.writeHead(200,{'Content-type' : 'text/html'});
      res.write('<form action="fileupload" method="post" enctupe="multipart/form-data">');  
      res.write('<input type="file" name="fileupload"><br>');
      res.write('<input type="submit"value="Enviar">');
      res.write('</form>');
      return res.end();

    }
}).listen(8080); */ 

/* const EventEmitter = require('events');
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Total de la compra: ${total}`);
    console.log(`Numero de productos: ${numProductos}`);

});

emisorProductos.emit('compra', 500, 5); */

const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) =>{
   setTimeout( () => {
      if (promesaCumplida) {
        resolve('Promesa cumplida');
      } else {
        reject('Promesa no cumplida');

      } 
   }, 5000);

});

miPromesa.then((valor) => {
  console.log(valor);
});







