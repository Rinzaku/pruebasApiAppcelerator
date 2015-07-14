
var diripc= 'http://192.168.3.100:8080/';
var diripl= 'http://192.168.0.6:8080/';

var comentarios = 'comentarios/';
var viajes = 'viajes/';

var viaje ={
	id_taxi: 2,
	id_estatus_viaje:4,
	id_taxista:0,
	ident_dispositivo:'',
	lat_origen:'',
	long_origen:'',
	lat_destino:'',
	long_destino:'',
	calificacion:0,
	nivel_confianza:0,
	fecha:'2015-07-13 11:34:00.878'
};

var url =diripl+'taxi/v1/'+viajes;

function doGet(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
	};
	
	// Send the request data.
	anXhr.open('GET',url);
	anXhr.send();
	
}

function doGetId(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
	};
	
	var urlget= url+$.txtId.getValue();
	
	// Send the request data.
	anXhr.open('GET',urlget);
	anXhr.send();
	
}

function doPost(e) {
	llenaViaje();
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	
	
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
	};
	
	// Send the request data.
	anXhr.open('POST',url);
	anXhr.send(viaje);
	
}

function doPut(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var comentario = {
		'id_viaje': 500,
		'comentario': 'comentario actualizado'
	};
	
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
		console.log(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
		console.log(this.responseText);
	};
	var urlput=url+$.txtId.getValue();
	console.log(urlput);
	// Send the request data.
	anXhr.open('PUT',urlput);
	anXhr.send(viaje);
	
}

function doDelete(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var objeto = {};
	
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
	};
	var urldel = url + $.txtId.getValue();
	
	// Send the request data.
	anXhr.open('DELETE',urldel);
	anXhr.send(objeto);
	
}

function llenaViaje(){
	viaje.id_taxi=Math.floor((Math.random()*100)+1);
	viaje.id_estatus_viaje=Math.floor((Math.random()*4)+1);
	viaje.id_taxista=Math.floor((Math.random()*100)+1);
	viaje.ident_dispositivo='123456'+Math.floor(Math.random()*100);
	viaje.calificacion=Math.floor((Math.random()*10)+1);
	viaje.nivel_confianza=Math.floor((Math.random()*10)+1);
}

$.index.open();
