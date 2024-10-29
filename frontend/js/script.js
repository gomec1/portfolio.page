document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio Seite geladen");
});

// Start Animation
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const hello = document.getElementById("hello");

  hello.addEventListener("click", function () {
    overlay.classList.add("slide-up");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 2500); // Dauer der Animation (1s)
  });
});
