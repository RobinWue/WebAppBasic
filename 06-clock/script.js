function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");
  const digitalClock = document.getElementById("digital-clock");

  const secondDegree = (seconds / 60) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  digitalClock.textContent = now.toLocaleTimeString("de-DE");
}

setInterval(setClock, 1000);
setClock();
