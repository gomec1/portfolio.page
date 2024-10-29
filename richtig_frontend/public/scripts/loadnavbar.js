document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    console.log("Navbar container found, loading navbar...");
    fetch("components/navbar.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        navbarContainer.innerHTML = data;
        console.log("Navbar loaded successfully.");
      })
      .catch((error) => console.error("Error loading navbar:", error));
  } else {
    console.warn("Navbar container not found.");
  }
});
