
/* funcion */
/* function saludar (){
   alert("Bienvenidos a Retrofut");
}
saludar()  */

/* nombre del usuario */
/* let nombreUsuario = prompt(  "¿Como te llamas.?" );
let apellidoUsuario = prompt("¿Como es tu apellido.?");
console.log ("el nombre completo del usuario es "+ nombreUsuario +" "+ apellidoUsuario )
alert (" Hola "  + nombreUsuario + " "+   apellidoUsuario );
*/
/* condicional */
/* 
     let sexoUsuario = prompt("¿Cual es tu sexo? MASCULINO, FEMENINO u OTRO.");
   if(sexoUsuario.toUpperCase().trim() == "MASCULINO"){
    alert("Le mostramos ofertas y prendas de hombre");
   }
   else if( sexoUsuario.toUpperCase().trim() == "FEMENINO"){
    alert("Le mostramos ofertas y prendas femeninas");
   }
   else if( sexoUsuario.toUpperCase().trim() == "OTRO"){
   alert("Le mostramos ofertas y prendas de cualquier sexo");
   }
   else{
    alert("El usuario no ingreso el sexo");
   }  */

/* algoritmo con ciclo */
/* let stock = prompt("Ingresar stock faltante o FIN");
let prenda = 0
while ( stock.trim().toUpperCase() !=="FIN" && stock.trim() !== "" ){
 prenda ++ ;
 console.log( prenda + "- el stock que hay que revisar es:  "+ stock);
 stock= prompt("Ingresar stock faltante");
}    */

/* segunda pre entrega */

/* objeto */
/* let stock = {
  prenda: 0,
  talle: 0,
  color: 0,
  calidad: 0, */

/* } */;
/* stock.prenda = prompt("ingrese la prenda a reponer");
stock.talle = prompt("ingrese los talles a reponer");
stock.color = prompt("ingrese el color de la prenda");
stock.calidad = prompt("ingrese la calidad de la prenda");
console.log(" los  datos son ", stock) */
/*  */
/* array */
/* let iventario = [];
let repuesta = prompt("¿Quieres agregar alguna prenda al stock?, si no lo desea comentar un NO")
while (repuesta.trim().toUpperCase() === "SI") {
  let unInventario = prompt("¿Que prenda desea agregar al stock?")
  iventario.push(unInventario)
  repuesta = prompt("¿Quieres seguir?")

} */
/* console.log("las prendas a pedir son")
for (let index = 0; index < iventario.length; index++) {
  console.log(index + " " + iventario[index] + " a pedir"
  ) */

/* } */
/*  */
/* metodo de busqueda dentro de un array */
/* const marcaSolicitada = prompt("ingrese la marca del producto")

const prendaFiltrada = prendasMock.filter((unaMarca) =>
  unaMarca.marca
    .trim()
    .toLowerCase()
    .includes(marcaSolicitada.trim().toLowerCase())

)
console.table(prendaFiltrada) */
/*  */


const FORMULARIO = document.getElementById("prenda")
FORMULARIO.addEventListener("submit", (event) => {
  event.preventdefault();
  let mensaje= FORMULARIO.children[1].value
  console.log (mensaje)
 
})
