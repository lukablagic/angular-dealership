import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { CarFormComponent } from 'src/app/shared/components/car-form/car-form.component';
import { Car } from 'src/app/shared/models/car.model';
import { Equipment } from 'src/app/shared/models/equipment.model';
import { PaintCombinations, Pspc0000 } from 'src/app/shared/models/paint.model';

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
  colors:any = [
    {value:'pspc0000',hex:'#dbd0c8'},
    {value:'pspc0002',hex: '#e4dedb'},
    {value:'pspc0004',hex: '#131313'},
    {value:'pspc0007',hex: '#3275a7'},
    {value:'pspc0008',hex: '#1f8fbd'},
    {value:'pspc0009',hex: '#82aacc'},
    {value:'pspc0010',hex: '#819ab8'},
    {value:'pspc0014',hex: '#2596ed'},
    {value:'pspc0015',hex: '#70c9fe'},
    {value:'pspc0051',hex: '#8c7560'},
    {value:'pspc0033',hex: '#a41722'},
  ];

  constructor(private carApi: CarsAPIService, private sanitizer: DomSanitizer) {
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
    this.carApi.addCar(this.car);
  }
  getCarImage(car: Car) {
    this.carApi.getCarImage(car).subscribe((imageUrl: string) => {
      this.car.image = imageUrl;
    });
  }
setColor(color:any){
  this.car.paintId = color.value;
}
}
