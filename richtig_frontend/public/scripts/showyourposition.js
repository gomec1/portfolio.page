// Funktion um Googel Karte mit Standort des Nutzers zu initialisieren
function initializeMap(lat, lng) {
  const map = document.getElementById("map");
  map.classList.remove("hidden");
  map.innerHTML = `<iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            style="border:0" 
            src="https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed" 
            allowfullscreen>
        </iframe>`;
}

// Event Listener für den Button, um den Standort des Nutzers zu erhalten
document
  .getElementById("get-location")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Zeige die Karte mit dem Standort des Nutzers an
          initializeMap(latitude, longitude);
        },
        (error) => {
          alert("Error retrieving location: " + error.message);
        },
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });
