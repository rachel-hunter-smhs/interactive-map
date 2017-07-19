var mapboxAccessToken = {sk.eyJ1IjoicmFjaGVsaHVudGVyMjAwMSIsImEiOiJjajViYW53Z2cwdGxqMnFwMTV2bmVqYnJwIn0.l0j00kH8zTiWMJk0u3TVnw};
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: ...
}).addTo(map);

L.geoJson(statesData).addTo(map);
