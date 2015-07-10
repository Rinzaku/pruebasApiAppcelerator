//var url ='http://192.168.3.123:8080/myws/';


var diripc= 'http://192.168.3.103:8080/';
var diripl= 'http://192.168.1.91:8080/';

var url =diripc+'taxi/v1/index.php/comentarios/';

function doClick(e) {
	
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

function doClick6(e) {
	
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
	
	var urlget= url+$.txtid.getValue();
	alert(urlget);
	// Send the request data.
	anXhr.open('GET',urlget);
	anXhr.send();
	
}

function doClick1(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var comentario = {
				id_viaje: 500,
				comentario: "prueba post comentario desde iphone"
		};
	//var url ='http://192.168.1.91:8080/taxi/v1/Viajes.php';
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

function doClick2(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var comentario = {
		'id_viaje': 500,
		'comentario': 'comentario actualizado'
	};
	//var url ='http://192.168.1.91:8080/taxi/v1/Viajes.php';
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
	var urlput=url+'500';
	console.log(urlput);
	alert(urlput);
	// Send the request data.
	anXhr.open('PUT',urlput);
	anXhr.send(comentario);
	
}

function doClick3(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var objeto = {};
	//var url ='http://192.168.3.123:8080/myws/';
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
	};
	
	// Send the request data.
	anXhr.open('PATCH',url);
	anXhr.send(objeto);
	
}

function doClick4(e) {
	
	// Create an HTTPClient.
	var anXhr = Ti.Network.createHTTPClient();
	var objeto = {};
	//var url ='http://192.168.3.123:8080/myws/';
	anXhr.setTimeout(10000);
	
	// Define the callback.
	anXhr.onload = function() {
		alert(this.responseText);
	};
	anXhr.onerror = function() {
		alert(this.responseText);
	};
	var urldel = url + $.txtid.getValue();
	// Send the request data.
	anXhr.open('DELETE',urldel);
	anXhr.send(objeto);
	
}


$.index.open();
