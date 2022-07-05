// function item1(a, b){
// return a + b
// }
// console.log(item1(2, 3))

// function item2(base, exponente){
// return Math.pow(base, exponente)
// }
// console.log(item2(2, 3))

// function item4(nombre){
// if(nombre === "Español"){
//     return "Hola"
// }
// if(nombre === "Chino"){
//     return "chao"
// }
// if(nombre === "Portugues"){
//     return "ola"
// } else {
//     return "Error"
// }
// }
// // var resta = 5 - 2
// console.log(item4("Portugues"))

var array = [10, 21, 22, 2, 5];
// var NuevoArray = array.map((item) => {
//     if(item > 20){
//      return item
//     } else {
//      return "Error"
//     }
//  })
// console.log(array.map((item) => {
//    if(item > 20){
//     return item
//    } else {
//     return "Error"
//    }
// }))

// Crea una función 
// Lee el siguiente arreglo de objetos [{“nombre”: “Joaco”}, {“nombre”: “Seba”}, 
// {“nombre”: “Juan”}, {“nombre”: “Cristian”}]
// Muestra todos los nombres.

var array = [
    {"nombre": "Joaco"}, 
    {"nombre": "Seba"}, 
    {"nombre": "Juan"}, 
    {"nombre": "Cristian"}
]
function item11(){
    return array.map((item) => {
        return item.nombre
    })
}
console.log(item11())

