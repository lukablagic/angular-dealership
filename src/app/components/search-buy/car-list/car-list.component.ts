import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CarsAPIService } from 'src/app/services/cars-api.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  cars: any[];

  constructor(private api:CarsAPIService) {
    
  }

ngOnInit() {
  this.loadCars();
console.log(this.cars);
}

loadCars() {
  this.api.getCars().subscribe(data => {
  this.cars = data;
  });
}


}

