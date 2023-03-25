import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { ClassService } from 'src/app/services/class.service';
import { PhotoService } from 'src/app/services/photo.service';
import { Car } from 'src/app/shared/models/car.model';
import { Class } from 'src/app/shared/models/class.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 
  cars: Car[];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(public classService: ClassService,private api:CarsAPIService) {}

  ngOnInit() {
this.loadCars();
  }
  loadCars() {
    this.api.getAllCars().subscribe((data: Car[]) => {
      this.cars = data;
      this.cars.forEach((car) => {
        this.api.getCarImage(car).subscribe((image) => {
          car.image = image;
          this.cars = this.cars.slice(0, 4);
        });
      });
    });
    
    console.log(this.cars)
  }
}
