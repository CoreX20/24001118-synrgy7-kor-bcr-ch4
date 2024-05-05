class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.carSearchButton = document.getElementById("carSearch");
    this.tipeDriver = document.getElementById("tipeDriver");
    this.inputDate = document.getElementById("inputDate");
    this.inputTime = document.getElementById("inputTime");
    this.inputPassenger = document.getElementById("inputPassenger");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.carSearchButton.onclick = () => {
      this.clear();
      this.load();
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();

    // console.log(cars);
    const updatedCars = cars.map((car) => {
      const listTypeDriver = ['dengan-supir', 'tanpa-supir'];
      const randomIndex = Math.floor(Math.random() * listTypeDriver.length);

      return {
        ...car,
        typeDriver: listTypeDriver[randomIndex]
      };
    });
    // console.log(updatedCars)
    const filteredCars = updatedCars.filter((car) =>
      car.typeDriver === this.tipeDriver.value &&
      car.capacity >= parseInt(this.inputPassenger.value || 1) &&
      new Date(car.availableAt) >= new Date(this.inputDate.value) &&
      car.availableAt.toLocaleTimeString() >= this.inputTime.value
    );
    
    // console.log(filteredCars);
    Car.init(filteredCars);
    this.run();
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
