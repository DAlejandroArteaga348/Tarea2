var http = require('http');
// DAAG son las iniciales de  Diego Alejandro Arteaga Gutierrez
http.request({host: 'localhost', path: '/', port: 3000}, function(peticion){
    peticion.on('data', function(html){
        console.log(html.toString()); 
     
        console.log("Ingrese usuario y contraseña (user/pass)");  
    });
     peticion.on('end', function(){        
    });
}).end();

  
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var req = http.request({
        host: 'localhost',
        path: '/',
        port: '3000',
        method: 'POST',
      }, function(peticion){
    
        peticion.on('data', function(html){
            console.log(html.toString()); 
           
            console.log("Ingrese usuario y contraseña (user/pass)");  
        });    
    });
    req.write(d.toString().trim());
    req.end();
 
});



