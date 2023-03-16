import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-car-item',
  templateUrl: './admin-car-item.component.html',
  styleUrls: ['./admin-car-item.component.scss']
})
export class AdminCarItemComponent {
  @Input() car: any;

  constructor() {
  
  }
ngOnInit() {
 
}
}
