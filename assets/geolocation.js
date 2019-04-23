
/*map fetch*/

var coordinate = function(pos){
	var lat 	= pos.coords.latitude,
		long 	= pos.coords.longitude,
		acc		= pos.coords.accuracy,
		coords 	= lat + ', '+ long;

		console.log('accuracy: ' + acc + ' meters');
		console.log(lat);
		console.log(long);
	document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk/?q=' + coords + '&z=7&output=embed');
}

var errorHandle = function(error){
	if (error.code === 1){
		alert('Allow us to know your location.');
	}

}

document.getElementById('get_location').onclick = function(){
	navigator.geolocation.getCurrentPosition(coordinate, errorHandle);
	return false;
}

/*map fetch finish*/