import { SafeUrl } from "@angular/platform-browser";
import { Equipment } from "./equipment.model";

export class Car  {
 
  id?: string;
  make?: string;
  model?: string;
  image?: SafeUrl;
  price?: number;
  year?: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
  engineSize?: number;
  equipment?: Equipment;

  constructor() {
    
    this.model = 'Enter model';
    this.price = 0;
    this.year = 0;
    this.mileage = 0;
    this.fuel = 'Diesel';
    this.transmission = 'RWD';
    this.engineSize = 0;
    this.image = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg';
  }
  setEqipment(equipment: Equipment) {
    this.equipment = equipment;
  }
  toObject() {
    return {
      make: this.make,
      model: this.model,
      image: this.image,
      price: this.price,
      year: this.year,
      mileage: this.mileage,
      fuel: this.fuel,
      transmission: this.transmission,
      engineSize: this.engineSize,
      equipment: this.equipment.toObject(),
    };
  }
 
}
