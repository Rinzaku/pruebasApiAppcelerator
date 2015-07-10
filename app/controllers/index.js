
var diripc= 'http://192.168.3.103:8080/';
var diripl= 'http://192.168.0.6:8080/';
var url =diripl+'taxi/v1/index.php/comentarios/';

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
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var comentario = {
				id_viaje: 500,
				comentario: "prueba post comentario desde iphone"
		};
	
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
	anXhr.send(comentario);
	
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
	
	// Send the request data.
	anXhr.open('PUT',urlput);
	anXhr.send(comentario);
	
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


$.index.open();
