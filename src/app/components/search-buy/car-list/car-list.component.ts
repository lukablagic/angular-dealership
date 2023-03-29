import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, map, Observable } from 'rxjs';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  filteredCars: Car[];
  cars: Car[];
  @Input() filters: Car = new Car();
  constructor(private api: CarsAPIService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.api
      .getAllCars().pipe( filter(cars =>
        cars.every(car => car.sold !== true)
        )).subscribe((data: any) => {
        this.cars = data;
        this.filteredCars = this.cars;
        this.cars.forEach((car) => {
          this.api.getCarImage(car).subscribe((image) => {
            car.image = image;
          });
        });
      });
  }
  filter() {
    this.filteredCars = this.cars.filter((car: Car) => {
      let isMatch = true;
      if (this.filters.make !== 'Any') {
        if (this.filters.make && car.make !== this.filters.make) {
          isMatch = false;
        }
        if (this.filters.model && car.model !== this.filters.model) {
          isMatch = false;
        }
      }
      if (this.filters.transmission !== 'Any') {
        if (
          this.filters.transmission &&
          car.transmission !== this.filters.transmission
        ) {
          isMatch = false;
        }
      }
      if (this.filters.fuel !== 'Any') {
        if (this.filters.fuel && car.fuel !== this.filters.fuel) {
          isMatch = false;
        }
      }
      if (this.filters.year !== 'Any') {
        if (
          this.filters.year &&
          car.year?.toString() !== this.filters.year?.toString()
        ) {
          isMatch = false;
        }
      }
      if (this.filters.price?.toString() !== 'Any') {
        if (
          this.filters.price &&
          car.price?.toString() !== this.filters.price?.toString()
        ) {
          isMatch = false;
        }
      }
      if (this.filters.mileage?.toString() !== 'Any') {
        if (
          this.filters.mileage &&
          car.mileage?.toString() !== this.filters.mileage?.toString()
        ) {
          isMatch = false;
        }
      }

      return isMatch;
    });
  }
}
