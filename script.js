// Get tab buttons and forms
const tabButtons = document.querySelectorAll(".tab-button");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Handle tab click
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active state from all tabs
    tabButtons.forEach(btn => btn.classList.remove("active"));

    // Add active to clicked tab
    button.classList.add("active");

    const tab = button.dataset.tab;

    if (tab === "login") {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    } else {
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    }
  });
});

// Stop forms actually submitting (for now)
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  alert("Login form submitted (demo).");
});

signupForm.addEventListener("submit", event => {
  event.preventDefault();
  alert("Sign up form submitted (demo).");
});
