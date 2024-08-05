document.addEventListener("DOMContentLoaded", () => {
  const redSlider = document.getElementById("red");
  const greenSlider = document.getElementById("green");
  const blueSlider = document.getElementById("blue");

  const redValue = document.getElementById("red-value");
  const greenValue = document.getElementById("green-value");
  const blueValue = document.getElementById("blue-value");

  const rgbValue = document.getElementById("rgb-value");
  const hexValue = document.getElementById("hex-value");

  function updateColor() {
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;

    document.body.style.backgroundColor = rgb;

    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    rgbValue.textContent = rgb;
    hexValue.textContent = hex;
  }

  redSlider.addEventListener("input", updateColor);
  greenSlider.addEventListener("input", updateColor);
  blueSlider.addEventListener("input", updateColor);

  updateColor();
});
