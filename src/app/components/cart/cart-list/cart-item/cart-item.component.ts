import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { CarOrder } from 'src/app/shared/models/car-order';
import { Car } from 'src/app/shared/models/car.model';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() car: Car;
  @Input() carOrder: CarOrder;
  carDetails: Car;
  visible: boolean;
  imageLeft: any;
  imageCenter: any;
  imageRight: any;
  user: User;

  constructor(private api: CarsAPIService, private authService: AuthService) {
    authService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit() {}
 
  removeOrder() {
    console.log(this.car.id)
    this.api.removeOrder(this.car.orderId,this.car.id);
  }
}
