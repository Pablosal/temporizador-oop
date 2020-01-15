class Temporizador {
  constructor() {
    this.running = false;
  }
  startTimer(duration) {
    if (this.running) throw new Error("Stopwatch has already started");
    this.running = true;
    var start = Date.now(),
      tiempoAtras,
      minutes,
      seconds,
      running = this.running;
    function timer() {
      tiempoAtras = duration - (((Date.now() - start) / 1000) | 0);
      minutes = ("0" + Math.floor(tiempoAtras / 60)).slice(-2);
      seconds = ("0" + (tiempoAtras % 60)).slice(-2);

      document.getElementById("time").textContent = minutes + ":" + seconds;

      if (tiempoAtras < 1) {
        start = Date.now() + 1000;
        clearInterval(myInt);
      }
    }
    timer();

    const myInt = setInterval(timer, 1000);
  }
}

document.getElementById("btn").addEventListener("click", displayTime);
const temporizador = new Temporizador();
function displayTime() {
  let minutos = document.getElementById("numeros_minutos").value * 60 || 0;
  let segundos =
    parseInt(document.getElementById("numeros_segundos").value) || 0;
  let complete = minutos + segundos;
  temporizador.startTimer(complete);
}
