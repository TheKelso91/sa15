document.addEventListener('DOMContentLoaded', function() {
    var travelMap = L.map('travelMap').setView([8.6705, 115.2126], 5); // Default: set to Bali since it is first article

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(travelMap);

    var locations = [
        {name: "Bali", coords: [8.6705, 115.2126]},
        {name: "Istanbul", coords: [41.0082, 28.9784]},
    ];

    locations.forEach(function(location) {
        L.marker(location.coords).addTo(travelMap)
            .bindPopup(`<b>${location.name}</b>`)
            .openPopup();
    });
});
