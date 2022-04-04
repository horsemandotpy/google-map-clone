const MAP_BOX_ACCESS_TOKEN = 'pk.eyJ1IjoiY2hvbm1lZ2FpIiwiYSI6ImNsMWp5dGUxeTI5cnEzaWxnZ3QzNWJrYW0ifQ.7BZYeDloPeqWxc6_ubbzfA';


navigator.geolocation.getCurrentPosition(successLocation, 
errorLocation, {
    enableHighAccuracy: true
})

function setupMap(centerPosition) {
    const map = new mapboxgl.Map({
       accessToken: MAP_BOX_ACCESS_TOKEN,
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v11',
       center: centerPosition,
       zoom: 15
 })
 map.addControl(new mapboxgl.NavigationControl());
 map.addControl(
    new MapboxDirections({accessToken: MAP_BOX_ACCESS_TOKEN}),
    'top-left'
    );
}

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-5.5, -4.5])
    console.log('Error')
}


