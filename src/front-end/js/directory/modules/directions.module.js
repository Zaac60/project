function DirectionsModule()
{
	this.markerDirectionResult = null;

	this.directionsService_ = new google.maps.DirectionsService();
  	this.directionsRenderer_ = new google.maps.DirectionsRenderer({map: App.getMap(), suppressMarkers:true}); 
}

DirectionsModule.prototype.clear = function()
{
	this.clearRoute();
	this.clearDirectionMarker();
};

DirectionsModule.prototype.clearRoute = function()
{
	this.directionsRenderer_.setDirections({routes: []});
};

DirectionsModule.prototype.calculateRoute = function(origin, destination) 
{
  	this.directionsService_.route({
    	origin: origin,
    	destination: destination,
    	travelMode: google.maps.TravelMode.DRIVING
  	}, function(response, status) {
	    if (status === google.maps.DirectionsStatus.OK) 
	    {
	      	google.maps.event.trigger(App.getMap(), 'resize');
	      	this.directionsRenderer_.setDirections(response);		      	

			var distance_to_reach = response.routes[0].legs[0].distance.value / 2;
			var distance_somme = 0;
			var i = 0;
			var route = response.routes[0].legs[0];

			while(i < (route.steps.length - 1) && distance_somme < distance_to_reach)
			{
				i++;
				distance_somme += route.steps[i].distance.value;				
			}
			
			var middleStep = Math.max(i,0);			
			this.clearDirectionMarker();

			var marker_position = route.steps[middleStep].path[Math.floor(route.steps[middleStep].path.length/2)];

			this.markerDirectionResult = new RichMarker({		
				map: App.getMap(),
				draggable: false,
				position: marker_position,
				flat: true
			}, null);

			var content = document.createElement("div");
			$(content).attr('id',"markerDirectionResult");
			$(content).addClass('arrow_box');
			var innerHtml = '<div class="duration">' + route.duration.text + "</div>";
			innerHtml    += '<div class="distance">' + route.distance.text + "</div>";
			content.innerHTML = innerHtml;
			this.markerDirectionResult.setContent(content);
	    } 
	    else
	    {
	      $('#modal-directions-fail').openModal();
	    }
  	});
};

DirectionsModule.prototype.clearDirectionMarker = function()
{
	if (this.markerDirectionResult !== null)
	{
		this.markerDirectionResult.setVisible(false);
		this.markerDirectionResult.setMap(null);
		this.markerDirectionResult = null;
	}
};