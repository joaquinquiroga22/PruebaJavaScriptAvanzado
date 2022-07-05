// const datos  = [{
//   id: "1",
//   title: "Iron Man",
//   Año: "2010"
// },{
//   id: "2",
//   title: "Spiderman-Come Homing",
//  Año: "2015"
// },{
//   id: "3",
//   title: "Avengers End Game",
//   Año: "2019"
// }
// ];

// const getDatos = () => {
//   const ids = []
//   return new Promise((resolve,reject) => {
//       if(datos.length === 0){
//           reject(new Error("No existen datos"))
//       }
//       for(var i = 0; i < datos.length; i++){
//           ids.push(datos[i].id)
//       }
//       setTimeout(() =>{
//       resolve(ids)
//       }, 3000)
//   })
// }
// getDatos()
// .then((datos) => console.log(datos))
// .catch((err) => {console.log(err.message)})


var usuarios = [
  
  {
    nombre: "Joaquin",
    apellido: "Quiroga",
    contraseña: "4561gagsg",
    esPremium: false,
    posts: [
      {
        Dislikes: 155,
        Likes: 566,
        Rettweets: 677,
      },
      {
        Dislikes: 11,
        Likes: 897,
        Rettweets: 2,
      },
      {
        Dislikes: 44,
        Likes: 564,
        Rettweets: 90,
      },
      {
        Dislikes: 45,
        Likes: 768,
        Rettweets: 1,
      }
    ]
  }
  
]


function sumarLikesDeUsuario(usuario) {
  var suma = 0
usuario?.posts?.forEach(e => {
    suma += e.Likes
})
return suma
}

console.log(sumarLikesDeUsuario(usuarios))


