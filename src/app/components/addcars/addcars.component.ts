import { Component } from '@angular/core';
import { CarFormComponent } from 'src/app/shared/components/car-form/car-form.component';
import { Car } from 'src/app/shared/models/car.model';

@Component({
 // standalone: true,
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.scss']
 // imports: [CarFormComponent],
})
export class AddcarsComponent {

  models: Car[];
  selectedModel: Car;
  carPrice: number;
  carYear: number;
  carMileage: number;
  carFuel: string;
  carTransmission: string;
  engineSize: number;
  engineSizeOptions: number[];
  selectedEngine: number;

constructor() {
  this.models = [
    {model: 'S Class'},
    {model: 'A Class'},
    {model: 'E Class'},
    {model: 'C Class'},
    {model: 'B Class'},
    {model: 'V Class'},
    {model: 'GLA Class'},
    {model: 'GLC Class'},
    {model: 'GLE Class'},
    {model: 'GLS Class'},
    {model: 'G Class'},
];
}

}

