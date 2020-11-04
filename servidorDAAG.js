const http = require('http');
// DAAG son las iniciales de  Diego Alejandro Arteaga Gutierrez
var usuarios = [
    {
        id: 1,
        nombre: "Dan israel",
        apellido: "Copa Lupe",
        usuario: "dcopalupe",
        password: "123456"
    },
    {
        id: 2,
        nombre: "Jorge Andres",
        apellido: "Alanoca Quino",
        usuario: "jalanocaquino",
        password: "1q2w3e4"
    },
    {
        id: 3,
        nombre: "Ana",
        apellido: "Condori Quispe",
        usuario: "acondoriquispe",
        password: "54321"
    }
]

//Login
function login(user) {
    for (let i = 0; i < usuarios.length; i++) {
        const us = usuarios[i];
        // busca la barra y toma la posicion
        j= user.indexOf('/')
        // parte en una subcaadena del 0 hasta antes de la barra
        a = user.substring(0,j)
        // parte en otra subcadena desde la barra hasta el final
        b = user.substring(j+1,user.length)
       //compara si usuario y password son correctos
        if(us.usuario == a && us.password == b ){
            return us;
        }        
    }
    return false;
}

const server = http.createServer(function (peticion, respuesta) {
    
    if(peticion.method == 'GET'){
        console.log(peticion.method)
        respuesta.write("----------- Bienvenido ------");
    }
    if(peticion.method == 'POST'){
        console.log(peticion.method)
        var resp = "";

        peticion.on('data', (data) => {
            var dato = login(data.toString())
             if(dato != false){
                resp = "Bienvenido "+ dato.nombre + " "+ dato.apellido +" !!!";
             }else{
                resp = "Lo siento, los datos son incorrectos";
            } 
           
            respuesta.write(resp);
            console.log();
            respuesta.end();                     
        });
    }
});

server.listen(3000, function(){
    console.log("Servidor corriendo ");
})