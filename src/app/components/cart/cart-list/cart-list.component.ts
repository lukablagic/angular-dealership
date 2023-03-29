import { Component, Input } from '@angular/core';
import { CollectionReference } from 'firebase/firestore';
import { Subscription } from 'rxjs';
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
  cars: Car[] = [];
  user: User;
  orders: CarOrder[];
  AuthSub: Subscription;
  subscriptions: Subscription[] = [];
  counter: number = 0;
  constructor(private api: CarsAPIService, private authService: AuthService) {
   this.AuthSub = this.authService.getUser().subscribe((user: User) => {
      this.user = user;
      //console.log(this.user)
      this.cars = this.api.getOrdersByUser(this.user.uid);

      this.getCars();
    });
   
  }

  ngOnInit() {}

  getCars() {
   // this.AuthSub.unsubscribe();
     console.log(this.cars)
  }
  ngDestroy() {}
}
