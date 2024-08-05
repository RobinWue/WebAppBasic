// Javascript wird erst ausgführt wenn das HTML geladen ist.
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("switchButton");
  let isLightMode = true; //Seite beginnt im hellen modus daher true

  button.addEventListener("click", function () {
    isLightMode = !isLightMode; // Wird auf false gesetzt !
    if (isLightMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      button.textContent = "Gute Nacht";
      button.classList.remove("dark-mode");
      button.classList.add("light-mode");
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      button.textContent = "Guten Morgen";
      button.classList.remove("light-mode");
      button.classList.add("dark-mode");
    }
  });

  button.classList.add("light-mode");
});
