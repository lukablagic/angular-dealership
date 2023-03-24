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
  @Input() imageLeft: any[];
  @Input() imageCenter: any[];
  @Input() imageRight: any[];
  @Input() imageBottom: any[];
}
