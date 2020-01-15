class Cronometro {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    this.duration = 0;
  }
  start() {
    if (this.running) throw new Error("Stopwatch has already started");
    this.running = true;
    this.startTime = new Date();
    console.log(this.duration);
  }
  stop() {
    if (!this.running) throw new Error("Stopwatch is not started");
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
  }
  reset() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
  }
  get check() {
    return this.duration;
  }
}
