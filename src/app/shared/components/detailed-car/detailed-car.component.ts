import { Component, Input } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-detailed-car',
  templateUrl: './detailed-car.component.html',
  styleUrls: ['./detailed-car.component.scss']
})
export class DetailedCarComponent {
@Input() car: Car;

}
