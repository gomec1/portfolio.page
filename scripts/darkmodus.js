document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  // Check the saved theme in localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    themeToggle.textContent = "White ☀️";
  } else {
    document.documentElement.classList.remove("dark");
    themeToggle.textContent = "Dark 🌙";
  }

  themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      themeToggle.textContent = "White ☀️";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "Dark 🌙";
      localStorage.setItem("theme", "light");
    }
  });
});
