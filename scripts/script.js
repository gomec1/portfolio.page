document.addEventListener("DOMContentLoaded", function () {
  // Initialisiere die Datenvariable
  const data = null;

  // Erstelle eine neue XMLHttpRequest-Instanz
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  // Füge einen Event-Listener für den readystatechange-Event hinzu
  xhr.addEventListener("readystatechange", function () {
    // Überprüfe, ob die Anfrage abgeschlossen ist
    if (this.readyState === this.DONE) {
      const quoteContainer = document.getElementById("quote");

      // Überprüfe, ob die Anfrage erfolgreich war
      if (this.status === 200) {
        try {
          // Parse die JSON-Antwort
          const response = JSON.parse(this.responseText);
          // Setze den Textinhalt des quoteContainer-Elements
          quoteContainer.textContent = response.value || "Kein Zitat gefunden.";
        } catch (error) {
          // Zeige eine Fehlermeldung an, wenn ein Fehler beim Parsen auftritt
          quoteContainer.innerHTML =
            "<span class='error'>Fehler beim Verarbeiten der Daten.</span>";
        }
      } else {
        // Zeige eine Fehlermeldung an, wenn die Anfrage nicht erfolgreich war
        quoteContainer.innerHTML = `<span class='error'>Fehler: ${this.statusText}</span>`;
      }
    }
  });

  // Öffne eine GET-Anfrage zur angegebenen URL
  xhr.open(
    "GET",
    "https://matchilling-tronald-dump-v1.p.rapidapi.com/quote/9c46479ff4mshd7d81eae43b8a8ap108ce2jsn75d796f55335",
  );
  // Setze die erforderlichen Header für die Anfrage
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "9c46479ff4mshd7d81eae43b8a8ap108ce2jsn75d796f55335",
  );
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "matchilling-tronald-dump-v1.p.rapidapi.com",
  );
  xhr.setRequestHeader("accept", "application/hal+json");

  // Sende die Anfrage
  xhr.send(data);
});
