import { Equipment } from "./equipment.model";

export class Car extends Equipment {
  id?: string;
  model?: string;
  image?: string;
  price?: number;
  year?: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
  engineSize?: number;
  equipment?: Equipment;

  constructor() {
    super(false, false, false, false, false, false, false, false);
    this.model = '';
    this.price = 0;
    this.year = 0;
    this.mileage = 0;
    this.fuel = 'Diesel';
    this.transmission = 'RWD';
    this.engineSize = 0;
    this.image = 'https://imgd.aeplcdn.com/0x0/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-3.jpeg';
  }

  toObject(): any {
    return {
      model: this.model,
      image: this.image,
      price: this.price,
      year: this.year,
      mileage: this.mileage,
      fuel: this.fuel,
      transmission: this.transmission,
      engineSize: this.engineSize,
      equipment: {
        airConditioning: this.airConditioning,
        cruiseControl: this.cruiseControl,
        parkingSensors: this.parkingSensors,
        powerSteering: this.powerSteering,
        powerWindows: this.powerWindows,
        powerMirrors: this.powerMirrors,
        ABS: this.ABS,
        airbags: this.airbags,
      },
    };
  }
}
