import { Component, Input } from '@angular/core';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-detailed-car',
  templateUrl: './detailed-car.component.html',
  styleUrls: ['./detailed-car.component.scss'],
})
export class DetailedCarComponent {
  @Input() car: Car;
  constructor(private api: CarsAPIService) {}
  imageLeft: any[];
  imageCenter: any[];
  imageRight: any[];
  imageBottom: any[];


  ngOnChanges() {
this.getDetailPictures();
  }

  getDetailPictures() {
    this.api.getCarImageAngel(this.car,"05").subscribe((data: any) => {
      this.imageLeft = data;
    });
    this.api.getCarImageAngel(this.car,"09").subscribe((data: any) => {
      this.imageCenter = data;
    });
    this.api.getCarImageAngel(this.car,"13").subscribe((data: any) => {
      this.imageRight = data;
    });
    this.api.getCarImageAngel(this.car,"21").subscribe((data: any) => {
      this.imageBottom = data;
    });
    console.log(this.imageLeft)
  }
}
