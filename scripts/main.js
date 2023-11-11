





let prenda = [];
let marca = [];
let color = [];
let talle = [];
let calidad = [];
let submit = document.getElementById("enviar");
submit.addEventListener('click', registrarFormulario);

function registrarFormulario() {
  let prendaValor = document.getElementById("prenda").value;
  let marcaValor = document.getElementById("marca").value;
  let colorValor = document.getElementById("color").value;
  let talleValor = document.getElementById("talle").value;
  let calidadValor = document.getElementById("calidad").value;

  prenda.push(prendaValor);
  marca.push(marcaValor);
  color.push(colorValor);
  talle.push(talleValor);
  calidad.push(calidadValor);

  localStorage.setItem('prenda', JSON.stringify(prenda));
  localStorage.setItem('marca', JSON.stringify(marca));
  localStorage.setItem('color', JSON.stringify(color));
  localStorage.setItem('talle', JSON.stringify(talle));
  localStorage.setItem('calidad', JSON.stringify(calidad));

 if (prendaValor === "") {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Debes completar la prenda ',
      showConfirmButton: false, 
      timer: 1500 

    })
  }
  if (colorValor === "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No agregaste la prenda',

    })
    
  }
}
/* promesas */
 const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prendasMock);
    }, 3000);
  })
};
const pedirProductosNo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("no se encontraron los resultados");
    }, 3000);
  })
};
let detallados = [];
pedirProductos().then((res) => {
  detallados= res;
console.table (detallados)
})

pedirProductosNo()
.then((res)=>{
  detallados= res
  console.table(error)
}) 

 fetch("/mocks/prendas.json")
.then((res)=>res.json())
.then((data)=>{
  console.table(data)
})

