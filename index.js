function initMap() {
    // map options
    var options = {
        center: { lat: 41.878113, lng: -87.629799 },
        zoom: 12,
    };

    //new Map
    map = new google.maps.Map(document.getElementById("map"), options);

    //listen for click on map location
    google.maps.event.addListener(map, "click", (event) => {
        //add marker
        addMarker({ location: event.latLng });
    });

    // Add Markers to array
    MarkerArray = [
        {
            location: { lat: 41.8507, lng: -87.634 },
            content: `<h2>Chinatown<h2>`,
        },
        {
            location: { lat: 41.8674, lng: -87.6275 },
            content: `<h2>West Loop<h2>`,
        },
        {
            location: { lat: 41.8854, lng: -87.6627 },
            content: `<h2>South Loop<h2>`,
        },
    ];

    // for loop, loop through marker
    for (let i = 0; i < MarkerArray.length; i++) {
        addMarker(MarkerArray[i]);
    }

    // Add Marker

    function addMarker(property) {
        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        //Check for custom icon

        if (property.content) {
            const detailWindow = new google.maps.InfoWindow({
                content: property.content,
            });

            marker.addListener("mouseover", () => {
                detailWindow.open(map, marker);
            });
        }
    }
}
