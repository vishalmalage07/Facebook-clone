// Selecting elements
const settingsmenuhide = document.querySelector(".settings");
const dark_button = document.getElementById("dark-button");

// Function to toggle the visibility of settings menu
function settingsmenu() {
  settingsmenuhide.classList.toggle("settings-hide");
}

// Event listener for dark mode toggle button
dark_button.onclick = function () {
  // Toggling dark mode classes
  dark_button.classList.toggle("dark-mode-on");
  document.body.classList.toggle("dark-mode");

  // Storing theme mode in local storage
  if (localStorage.getItem("Theme-Mode") == "light") {
    localStorage.setItem("Theme-Mode", "dark");
  } else {
    localStorage.setItem("Theme-Mode", "light");
  }
};

// Checking and applying theme mode from local storage
if (localStorage.getItem("Theme-Mode") == "light") {
  dark_button.classList.remove("dark-mode-on");
  document.body.classList.remove("dark-mode");
} else if (localStorage.getItem("Theme-Mode") == "dark") {
  dark_button.classList.add("dark-mode-on");
  document.body.classList.add("dark-mode");
} else {
  // Defaulting to light mode if no theme mode is set in local storage
  localStorage.setItem("Theme-Mode", "light");
}