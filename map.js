var mapboxAccessToken = {your access token here};
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: ...
}).addTo(map);

L.geoJson(statesData).addTo(map);
