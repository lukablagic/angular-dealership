import { Equipment } from "./equipment.model";

export class Car {
id?: string;
  model?: string;
  price?: number;
  year?: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
  engineSize?: number;
  equipment?: Equipment;

  constructor(model: string, price: number, year: number, mileage: number, fuel: string, transmission: string, engineSize: number,equipment: Equipment) {
    this.model = model;
    this.price = price;
    this.year = year;
    this.mileage = mileage;
    this.fuel = fuel;
    this.transmission = transmission;
    this.engineSize = engineSize;
    this.equipment =  equipment;

  }

}
