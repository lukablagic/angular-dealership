import { Component } from '@angular/core';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-admin-car-list',
  templateUrl: './admin-car-list.component.html',
  styleUrls: ['./admin-car-list.component.scss'],
})
export class AdminCarListComponent {
  cars: Car[];

  constructor(private api: CarsAPIService) {}

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
