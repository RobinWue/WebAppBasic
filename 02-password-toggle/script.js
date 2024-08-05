function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.getElementById("toggleButton");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Passwort verbergen";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Passwort anzeigen";
  }
}
