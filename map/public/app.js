// layer group
var cities = L.layerGroup();

	L.marker([8.984156, 77.425396]).bindPopup('New Market').addTo(cities),
	L.marker([8.982470, 77.420618]).bindPopup('Surandai,sivagurunathapuram').addTo(cities),
	L.marker([8.980456, 77.417401]).bindPopup('Muppidari Amman Temple').addTo(cities),
	L.marker([8.978671, 77.418124]).bindPopup('Pottalmadasamy Kovil Street').addTo(cities);
	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};
	var overlays = {
		"Cities": cities
	};
    
	
// default map layer
let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [8.979023, 77.419646],
    zoom: 15,
    layers: [streets, cities],
});


    function runDirection(start, end) {       
        // creating route
        map = L.map('map', {
            layers: MQ.mapLayer(),
            center: [8.979023, 77.419646],
            zoom: 15,
        });
        
        var dir = MQ.routing.directions();
        
        dir.route({
            locations: [
                start,
                end
            ]
        });
    
        //Route starting point
        CustomRouteLayer = MQ.Routing.RouteLayer.extend({
            createStartMarker: (location) => {
                var custom_icon;
                var marker;
                custom_icon = L.icon({
                    iconUrl: 'img/start.png',
                    iconSize: [50, 50],
                    iconAnchor: [25,50],
                    popupAnchor: [0, 0]
                });
                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);
                return marker;
            },
            //route end point
            createEndMarker: (location) => {
                var custom_icon;
                var marker;
                custom_icon = L.icon({
                    iconUrl: 'img/end.png',
                    iconSize: [50, 50],
                    iconAnchor: [25, 50],
                    popupAnchor: [0, 0]
                });
                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            }
        });
        
        map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: true
        })); 
    }

    let btn = document.createElement("button");
// form field
function submitForm(event) {
    event.preventDefault();
console.log('form submitted');
    // delete current map layer
    map.remove();
    // getting form data
    start = document.getElementById("start").value;
    end = document.getElementById("destination").value;
    // run directions function
    runDirection(start, end);
    //  back button
    let f = document.getElementById("form");
    btn.innerHTML = "Back";
    btn.type = "submit";
    btn.name = "back";
    btn.id="back";
    btn.addEventListener("click", function () {
       location.reload();
    
      });
    
    f.appendChild(btn);
    L.control.watermark({ position: 'bottomleft' }).addTo(map);
    L.control.layers(baseLayers, overlays).addTo(map);
}
// asign the form to form variable
const form = document.getElementById('form');
// call the submitForm() function when submitting the form
form.addEventListener('submit', submitForm);



//watermark
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = 'img/surandai.png';
        img.style.width = '200px';
        img.style.margin = '0 0 40% 0';
        return img;
    },
    onRemove: function(map) {
        // Nothing to do here
    }
})
L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({ position: 'bottomleft' }).addTo(map);


//creating red circle
L.circle([8.979023, 77.419646], 2000, {
    color: 'red',
    fillColor: 'pink',
    fillOpacity: 0.5
}).addTo(map);// .bindPopup("I am a circle.");

var popup = L.popup();



//onclick map
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);



// current location finder
	function onLocationFound(e) {
		var radius = e.accuracy / 2;
		L.marker(e.latlng).addTo(map)
			.bindPopup("You are within " + radius + " meters from this point").openPopup();
		L.circle(e.latlng, radius).addTo(map);
	}
	function onLocationError(e) {
		alert(e.message);
	}
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 16});



//for layer
    L.control.layers(baseLayers, overlays).addTo(map);