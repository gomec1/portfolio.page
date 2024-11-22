document.addEventListener("DOMContentLoaded", function () {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const quoteContainer = document.getElementById("quote");

      if (this.status === 200) {
        try {
          const response = JSON.parse(this.responseText);
          quoteContainer.textContent = response.value || "Kein Zitat gefunden.";
        } catch (error) {
          quoteContainer.innerHTML =
            "<span class='error'>Fehler beim Verarbeiten der Daten.</span>";
        }
      } else {
        quoteContainer.innerHTML = `<span class='error'>Fehler: ${this.statusText}</span>`;
      }
    }
  });

  xhr.open(
    "GET",
    "https://matchilling-tronald-dump-v1.p.rapidapi.com/quote/9c46479ff4mshd7d81eae43b8a8ap108ce2jsn75d796f55335",
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "9c46479ff4mshd7d81eae43b8a8ap108ce2jsn75d796f55335",
  );
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "matchilling-tronald-dump-v1.p.rapidapi.com",
  );
  xhr.setRequestHeader("accept", "application/hal+json");

  xhr.send(data);
});
