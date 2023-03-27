import { Component, Input, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { DetailedCarComponent } from 'src/app/shared/components/detailed-car/detailed-car.component';
import { Car } from 'src/app/shared/models/car.model';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent {
  @Input() car: any;
  carDetails: Car;
  visible: boolean;
  imageLeft: any;
  imageCenter: any;
  user: User;
  imageRight: any;

  constructor(private api: CarsAPIService,private authService: AuthService) {
    this.getUser();
  }

ngOnInit() {

}
getDetailPictures() {
  this.api.getCarImageAngel(this.car,"05").subscribe((data) => {
    this.imageLeft = data;
  });
  this.api.getCarImageAngel(this.car,"09").subscribe((data) => {
    this.imageCenter = data;
  });
  this.api.getCarImageAngel(this.car,"13").subscribe((data) => {
    this.imageRight = data;
  });

}
 buyCar() {
  this.getUser();
  this.api.buyCar(this.car.id, this.user.uid);
}
showDialog() {
  this.visible = true;
}
getUser() {
    this.authService.getUser().subscribe((user:User) => {
    this.user = user;
   
  });
}
}
