import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { DomSanitizer,SafeUrl  } from '@angular/platform-browser';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { CarFormComponent } from 'src/app/shared/components/car-form/car-form.component';
import { Car } from 'src/app/shared/models/car.model';
import { Equipment } from 'src/app/shared/models/equipment.model';

@Component({
  // standalone: true,
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.scss'],
  // imports: [CarFormComponent],
})
export class AddcarsComponent {
  car: Car = new Car();
  display: boolean = false;
  equipment: Equipment;

constructor(private carApi: CarsAPIService,private sanitizer: DomSanitizer) {
  this.equipment = new Equipment();
}
  showDialog() {
    this.display = true;
  }



  setCar(car: Car) {
    this.car = car;
    this.car.setEqipment(this.equipment);
  }
  addCar() {
    console.log(this.car)  
    this.carApi.addCar(this.car);
}
  getCarImage(car: Car) {
    this.carApi.getCarImage(car).subscribe((imageUrl: string) => {
      this.car.image = imageUrl;
    });

  }
  
 
}
