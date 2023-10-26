

/* const FORMULARIO = document.getElementById("contacto")
FORMULARIO.addEventListener("submit", (event) => {
/*   event.preventdefault(); */
/*  let mensaje= FORMULARIO[0].value
console.log ( "lo que pusiste"+mensaje) */
/*  FORMULARIO.CHILDREN[1].value="" */
/* })  */

/* let mensaje = localStorage.getItem(" key,mensaje ")
 */




 let array
  prenda =[],
  marca = [],
  color = [],
  talle = [],
  calidad = [] ;
let submit = document.getElementById("enviar")
submit.addEventListener('click', registrarFormulario)

function registrarFormulario() {
  let prenda = document.getElementById("prenda").value
  let marca = document.getElementById("marca").value
  let color = document.getElementById("color").value
  let talle = document.getElementById("talle").value
  let calidad = document.getElementById("calidad").value
 
} registrarFormulario()
prenda.push(prenda);
marca.push(marca);
color.push(color);
talle.push(talle);
calidad.push(calidad)

localStorage.setItem('array', JSON.stringify(prenda))
localStorage.setItem('marca', JSON.stringify(marca))
localStorage.setItem('color', JSON.stringify(color))
localStorage.setItem('talle', JSON.stringify(talle))
localStorage.setItem('calidad', JSON.stringify(calidad))