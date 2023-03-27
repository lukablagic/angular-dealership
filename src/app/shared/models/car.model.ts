import { SafeUrl } from "@angular/platform-browser";
import { Equipment } from "./equipment.model";

export class Car  {
 
  id?: string;
  make?: string;
  model?: string;
  image?: SafeUrl;
  price?: number| string;
  year?: number| string;
  mileage?: number| string;
  fuel?: string;
  transmission?: string;
  paintId?: String;
  sold: boolean;
  equipment?: Equipment;

  constructor() {
    this.make = "Any";
    this.model = 'Any';
    this.price = 0;
    this.year = 0;
    this.mileage = 0;
    this.fuel = 'Any';
    this.transmission = 'Any';
    this.image = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg';
    this.paintId = 'imagin-grey';
    this.sold = false;
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
      equipment: this.equipment ? this.equipment.toObject() : null,
    };
  }
 
}
