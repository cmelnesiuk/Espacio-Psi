function HacerTodo(){

function DatosPersona (nombre,apellido,ObraSocial,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.ObraSocial = ObraSocial;
	this.edad = edad;
} 

function DatosTurno(fecha,hora) {
	this.fecha=fecha;
	this.hora=hora;
}

var nombreP1 = document.getElementById("nombre").value
var apellidoP1 = document.getElementById("apellido").value
var ObraSocialP1 = document.getElementById("ObraSocial").value
var elementoObraSocial = document.getElementById("ObraSocial")
var ObraSocialP1 = elementoObraSocial.options[elementoObraSocial.selectedIndex].text;
var edadP1 = parseInt(document.getElementById("edad").value)
var fechaP1 = document.getElementById("fecha").value
var horaP1 = document.getElementById("hora").value
var elementoHora = document.getElementById("hora")
var horaP1 = elementoHora.options[elementoHora.selectedIndex].text;

if(horaP1=="" || fechaP1==""){
	alert("Debe completar todos los campos del formulario")
}

if(horaP1!=="" && fechaP1!=="" && nombreP1!=="" && apellidoP1!=="" && ObraSocialP1!=="" && edadP1!==""){

		var DatosPersona = new DatosPersona(nombreP1,apellidoP1,ObraSocialP1,edadP1)
		var TurnoPersona = new DatosTurno(fechaP1,horaP1)
	//	//Creo un nuevo array, con el objeto de los datos de la persona y el objeto para los datos del turno
		var DatosCompletos = [DatosPersona,TurnoPersona]
		////convertir de objeto a JSON
		var DatosCompletosJSON = JSON.stringify(DatosCompletos)
		localStorage.setItem("Datos de "+nombreP1+" "+apellidoP1, DatosCompletosJSON);
		console.log(DatosCompletos)
		var parrafo = document.createElement("p");
		parrafo.innerHTML = `Estimadx  ${nombreP1} ${apellidoP1}, su turno fue reservado en la siguiente fecha: ${fechaP1} a las ${horaP1}. Muchas gracias!`
		parrafo1.appendChild(parrafo)	
}
}
 document.getElementById("boton1").addEventListener("click", HacerTodo)
		
