//  function Saludar(){
//   var nombre = "joaquin"
//   var edad = 22
//  return "Mi nombre es " + nombre +  " y mi edad es de " + edad + " años" 
//  }

//  console.log(Saludar())

// // function Multiplicar(a, b){
// //   return a * b
// // }
// // console.log(Multiplicar(2, 3))
// var numero = 20
// if(numero == 20){
//   console.log("Hola Mundo")
// } else {
//   console.log("Error")
// }

// function Nomenclatura(nombre, edad){
// if((nombre === "Joaquin") && (edad === 25) ){
//   return "Hola mi Nombre es " + nombre +  " y mi edad es " + edad 
// } else {
//   return "Error no hay coincidencia"
// }
// }
// console.log(Nomenclatura("Joaquin", 23))
//  function venta(saludo,nombre) {
//    return function () {
//        console.log(saludo + " " + nombre);
//    }
//  }
//  function ejemplo(){
//    var entrega = venta("Hola","joaquin"); 
//    return entrega()
//  }
//  ejemplo()

//  function contador() {
//   var cont = 0
//   return function () {
//       cont++
//       return cont;
//   }
// }

// const newcontador = contador();
// return (newcontador()); 1

// newcontador(); 2

// newcontador2(); 1



var instructor = {
  nombre: "Joaquin",
  edad: 25
}
var alumno = {
  nombre: "Marcos",
  curso: "FullStack"
}
function getNombre(){
  return this.nombre;
}

var getNombreInstructor = getNombre.bind(instructor)
var getNombreAlumno = getNombre.bind(alumno) 
