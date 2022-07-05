// function crearGato(nombre, edad) {
//     // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
//     // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
//     // Devuelve el objeto
//     // Tu código:

//     var objeto = {
//         nombre: nombre,
//         edad: edad
//     }

//     return objeto
// }
// console.log(crearGato("Joaquin", 24))




// function agregarPropiedad(objeto, property) {
//     // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
//     // Devuelve el objeto
//     // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
//     // Tu código:

//     objeto[property] = null

//     return objeto

// }

// console.log(agregarPropiedad({}, "nombre"))


// function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//     // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
//     // Multiplica el numeroMisterioso por 5 y devuelve el producto
//     // Tu código:

//     var multiplica = objetoMisterioso.numeroMisterioso * 5
//     return multiplica
// }
// console.log(multiplicarNumeroDesconocidoPorCinco({ objetoMisterioso: 2 }))




// function nuevoUsuario(nombre, email, password) {
//     // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
//     // Devuelve el objeto
//     // Tu código:

//     var nuevoObjeto = {

//         nombre: nombre,
//         email: email,
//         password: password

//     }

//     return nuevoObjeto;
// }
// console.log(nuevoUsuario("joaquin", "aa@gmail.com", 24))


// function tieneEmail(usuario) {
//     // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     var usuario = {
//         email: 2
//     }

//     // if(usuario.email){
//     //     return true
//     // }

//     if (usuario.email != undefined) {
//         return true
//     } else {
//         return false
//     }

// }

// console.log(tieneEmail())



// function tienePropiedad(objeto, propiedad) {
//     // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
//     // "propiedad" es un string
//     // De lo contrario, devuelve "false"
//     // Tu código:

//     // if(objeto.hasOwnProperty(propiedad)){
//     //     return true
//     // }else {
//     //     return false
//     // }
//     return objeto.hasOwnProperty(propiedad)

// }
// console.log(tienePropiedad({}, "nombre"))













// function actualizarPassword(usuario, nuevaPassword) {
//     // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
//     // Devuelve el objeto
//     // Tu código:

//     var usuario = {
//         password: 1234
//     }

//     usuario.password = nuevaPassword
//     return usuario

//     [1, 2, 4, 5, 6, 7]
//     [6, 7]
// }



// function agregarAmigo(usuario, nuevoAmigo) {
//     // "usuario" tiene una propiedad llamada "amigos" que es un array
//     // Agrega "nuevoAmigo" al final de ese array
//     // Devuelve el objeto "usuario"
//     // // Tu código:

//     var usuario = {
//         amigos: [
//             "joaquin",
//             "Lucas",
//             "pepito"
//         ]
//     }

//     usuario.amigos.push(nuevoAmigo)
//     return usuario

// }
// console.log(agregarAmigo( , "Joaquin2"))



// var usuarios = [

//     {
//         nombre: "Joaquin",
//         apellido: "Quiroga",
//         contraseña: "4561gagsg",
//         esPremium: false
//     },
//     {
//         nombre: "Ester",
//         apellido: "Molina",
//         contraseña: "2222/",
//         esPremium: true
//     },
// ]


// function pasarUsuarioAPremium(usuarios) {
//     // "usuarios" es un array de objetos "usuario"
//     // Cada objeto "usuario" tiene la propiedad "esPremium"
//     // Define cada propiedad "esPremium" de cada objeto como "true"
//     // Devuelve el array de usuarios
//     // Tu código:

//     for (var i = 0; i < usuarios.length; i++) {
//         usuarios[i].esPremium = true
//     }
//     return usuarios
// }
// console.log(pasarUsuarioAPremium(usuarios))



// var usuarios2 = [
//     {
//         nombre: "Joaquin",
//         apellido: "Quiroga",
//         esPremium: false,
//         posts: [
//             {
//                 Dislikes: 155,
//                 Likes: 566,
//                 Rettweets: 677,
//             },
//             {
//                 Dislikes: 11,
//                 Likes: 897,
//                 Rettweets: 2,
//             },
//     }
// ]



// function sumarLikesDeUsuario(usuario) {
//     // "usuario" tiene una propiedad llamada "posts" que es un array
//     // "posts" es un array de objetos "post"
//     // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
//     // Suma todos los likes de todos los objetos "post"
//     // Devuelve la suma
//     // Tu código:

//     var suma = 0;

//     for (var i = 0; i < usuario.posts.length; i++) {
//         suma = suma + usuario.posts[i].Likes;
//     }
//     return suma

// }
// console.log(sumarLikesDeUsuario(usuarios2))













// const nuevoUsuario = {
//     esNuevo: true
// }
// const loveJSString = 'lovesJavascript';
// console.log(loveJSString)
// nuevoUsuario["username"] = 'otro.nombre.de.usuario';
// nuevoUsuario['password'] = '12345';
// nuevoUsuario[loveJSString] = true;

// console.log(nuevoUsuario)



// const nuevoObjeto = {
//     eliminarEstaPropiedad: true
// };

// delete nuevoObjeto.eliminarEstaPropiedad;

// const nuevoObjeto = {
//     decirHola: function() {
//         console.log('Hola a todo el mundo!');
//     }
// }

// nuevoObjeto.decirHola(); //Hola a todo el mundo!

const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    // console.log(clave);
     console.log(usuario[clave]);
}

const nuevoObjeto = {
    decirHola: function(nombre) {
        // console.log('Hola'+ nombre + ' a todo el mundo!');
        var nuevoObjeto = {
            decirChau: function() {
                console.log("chau")
            }
        }
        return nuevoObjeto
    }
}

nuevoObjeto.decirHola(); //Hola a todo el mundo!