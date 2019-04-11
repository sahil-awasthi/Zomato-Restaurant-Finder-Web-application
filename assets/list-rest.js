const cityName = location.href.split('=')[1];

const xhr = new XMLHttpRequest();

xhr.onload = function() {
	if (this.status === 200) {
		const data = this.responseText;
		console.log(data);		
	}
}

xhr.onerror = function() {
	console.log('Error in sending request.');
}

xhr.open('GET', 'https://developers.zomato.com/api/v2.1/cities?q=' + cityName);
xhr.setRequestHeader('user-key', 'c3d3366545336bba3bcec47786f44130');
xhr.send();