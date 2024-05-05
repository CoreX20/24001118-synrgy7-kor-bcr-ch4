class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card p-4 mb-4" style="width: 333px; height:538px; box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);">
        <img
          src="${this.image}"
          class="object-fit-cover rounded"
          height="160px"
          width="100%"
        />
        <p class="mt-4">${this.model}/${this.manufacture}</p>
        <p class="fw-bold">Rp${this.rentPerDay} / hari</p>
        <p>${this.description}</p>
        <div class="mt-auto">
          <p><i class="bi bi-people"></i> ${this.capacity} Orang</p>
          <p><i class="bi bi-gear"></i> ${this.transmission}</p>
          <p><i class="bi bi-calendar"></i> ${this.year}</p>
        </div>
        <button class="btn btn-success mt-auto" style="padding: 8px 12px;">Pilih Mobil</button>
      </div>
    `;
  }
}
