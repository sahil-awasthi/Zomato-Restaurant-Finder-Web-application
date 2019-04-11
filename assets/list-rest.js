const cityId = location.href.split('=')[1];
const midSection = document.querySelector('#mid-section');

const xhr = new XMLHttpRequest();

xhr.onload = restaurantsDetails;

xhr.onerror = function() {
	console.log('Error in sending request.');
}

xhr.open('GET', 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&entity_type=city');
xhr.setRequestHeader('user-key', 'c3d3366545336bba3bcec47786f44130');
xhr.send();

function restaurantsDetails() {
	if (this.status === 200) {
		const data = this.responseText;
		const restaurants = JSON.parse(data)['restaurants'];

		for (let details of restaurants) {
			midSection.innerHTML += `
	        <div class="restaurants">
	           <div class="rest-img" style="background-image: url(${details.restaurant.thumb}); background-size: 100% 100%">  
	           </div>
	           <div class="rest-info">
	       	    	<p class="rest-name">${details.restaurant.name}</p>
	            	<p class="ratings">
		                <span>&#9733;</span>
		                <span>${details.restaurant.user_rating.aggregate_rating}</span>
		                <span>(${details.restaurant.user_rating.votes})</span>
		                <span>|</span>
		                <span>223 reviews</span>
	            	</p>
	           	</div>
	        </div>
	        <hr>`;
		}
	}
}