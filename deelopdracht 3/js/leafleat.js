
// Initialiseer de kaart
var map = L.map('mapid').setView([51.214, 4.4636], 13);

// Voeg de OpenStreetMap laag toe
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Voeg een marker toe
L.marker([51.214, 4.4636]).addTo(map)
    .bindPopup('Deurne, Antwerpen')
    .openPopup();
