import { Equipment } from "./equipment.model";

export class Car {
id?: string;
  model?: String;
  price?: number;
  year?: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
  engineSize?: number;
  equipment?: Equipment;


  constructor() {
    this.model = '';
    this.price = 0;
    this.year = 0;
    this.mileage = 0;
    this.fuel = 'Disel';
    this.transmission = 'RWD';
    this.engineSize = 0;
    this.equipment =  new Equipment(false, false, false, false, false, false, false, false);

  }

}
