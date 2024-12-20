// filepath: /Users/carlosgomez/Random stuff/Programmieren/EWEB/portfolio.page/richtig_frontend/public/scripts/script.js
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });
});
