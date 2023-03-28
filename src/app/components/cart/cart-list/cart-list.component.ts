import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { CarOrder } from 'src/app/shared/models/car-order';
import { Car } from 'src/app/shared/models/car.model';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  cars: Car[];
  user: User;
  orders: CarOrder[];
  constructor(private api: CarsAPIService, private authService: AuthService) {
    this.authService.getUser().subscribe((user: User) => {
      this.user = user;
      this.getCars();
    });
  }

  ngOnInit() {}

  getCars() {
    this.api.getOrdersByUser(this.user.uid).subscribe((data: CarOrder[]) => {
      this.orders = data;
      this.api.getAllCars().subscribe((data: Car[]) => {
        this.cars = data;
      });
      this.orders.forEach((order) => {
        this.cars.forEach((car) => {
          if (order.carId == car.id) {
            this.cars.push(car);
          }
        });
        this.cars.forEach((car) => {
          this.api.getCarImage(car).subscribe((image) => {
            car.image = image;
          });
        });
      });
    });
  }
}
