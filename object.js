// const datos  = [{
//     id: "1",
//     title: "Iron Man",
//     Año: "2010"
//   },{
//     id: "2",
//     title: "Spiderman-Come Homing",
//    Año: "2015"
//   },{
//     id: "3",
//     title: "Avengers End Game",
//     Año: "2019"
//   }];
//   const getDatos = () => {
//     const ids = []
//     return new Promise((resolve,reject) => {
//         if(datos.length === 0){
//             reject(new Error("No existen datos"))
//         }
//         for(var i = 0; i < datos.length; i++){
//             ids.push(datos[i].id)
//         }
//         setTimeout(() =>{
//         resolve(ids)
//         }, 1500)
//     })
// }
// getDatos()
//  .then((datos) => console.log(datos))


//  function agregarPropiedad(objeto, property) {
//   // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
//   // Devuelve el objeto
//   // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
//   // Tu código:

//   objeto[property] = null
//   return objeto

// }

// console.log(agregarPropiedad({}, "nombre"))














// function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
//   // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
//   // Multiplica el numeroMisterioso por 5 y devuelve el producto
//   // Tu código:
// var resultado =  objetoMisterioso.numeroMisterioso * 5 
// return objetoMisterioso + resultado

// }

// console.log(multiplicarNumeroDesconocidoPorCinco({numeroMisterioso: 5}))


// function nuevousuario(nombre, email, passwd) {
//   const usuario = {
//       nombre:nombre,
//       email:email,
//       passwd:passwd,
//   }
//   return usuario
// }

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contrario, devuelve "false"
  // Tu código:

return usuario.email !== undefined ? "verdadero" : "falso" 

}

console.log(tieneEmail({email:"asdasdas@gmail.com"}))





function paraUsuarioAPremium(e){
  e.forEach(element => {
      element.esPremium = true;
  });
  return usuario
}

console.log(paraUsuarioAPremium(usuarios))
var usuarios = [

  {
    nombre: "Joaquin",
    apellido: "Quiroga",
    contraseña: "4561gagsg",
    esPremium: false
  },
  {
    nombre: "Ester",
    apellido: "Molina",
    contraseña: "2222/",
    esPremium: true
  },
  {
    nombre: "Adolfo",
    apellido: "Quiroga",
    contraseña: "xcgbe342",
    esPremium: false
  },
  {
    nombre: "Rodolfo",
    apellido: "Perez",
    contraseña: "piuo7876",
    esPremium: true
  },
  
  ]