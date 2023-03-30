import { Component, Input } from '@angular/core';
import { CollectionReference } from 'firebase/firestore';
import { Observable, Subscription } from 'rxjs';
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
  carsObservable:Observable<any[]>
  user: User;
  orders: Observable<CarOrder[]>;
  
  constructor(private api: CarsAPIService, private authService: AuthService) {
    this.authService.getUser().subscribe((user: User) => {
      this.user = user;
      this.carsObservable = this.api.getCarsOrderedByCurrentUser();

    });
   
  }

  ngOnChanges() {
    this.carsObservable = this.api.getCarsOrderedByCurrentUser();
  }

 
}
