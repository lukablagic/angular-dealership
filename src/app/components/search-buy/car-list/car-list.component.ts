import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  cars: Car[];

  constructor(private api:CarsAPIService) {
    
  }

ngOnInit() {
  this.loadCars();

}

loadCars() {
  this.api.getAllCars().subscribe((data: Car[]) => {
    this.cars = data;
    this.cars.forEach((car) => {
      this.api.getCarImage(car).subscribe((image) => {
        car.image = image;
      });
    });
  });
}


}

