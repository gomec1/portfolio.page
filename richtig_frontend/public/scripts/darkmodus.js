document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      themeToggle.textContent = "White ☀️";
    } else {
      themeToggle.textContent = "Dark 🌙";
    }
  });
});
