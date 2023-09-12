
/* funcion */
 function saludar (){
    alert("Bienvenidos a Retrofut");
}
saludar() 

   /* nombre del usuario */
      let nombreUsuario = prompt(  "¿Como te llamas.?" );
   let apellidoUsuario = prompt("¿Como es tu apellido.?");
   console.log ("el nombre completo del usuario es "+ nombreUsuario + apellidoUsuario )
   alert (" Hola "  + nombreUsuario + " "+   apellidoUsuario );
 
   /* condicional */

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
   } 

   /* algoritmo con ciclo */
 let stock = prompt("Ingresar stock faltante");
 let prenda = 0
 while ( stock.trim().toUpperCase() !=="FIN" && stock.trim() !== "" ){
    prenda ++ ;
    console.log( prenda + "- el stock que hay que revisar es:  "+ stock);
    stock= prompt("Ingresar stock faltante");
 } 



   

