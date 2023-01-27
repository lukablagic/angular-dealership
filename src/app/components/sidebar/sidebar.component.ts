import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],  
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]
})
export class SidebarComponent {
  visibleSidebar1:boolean = false;
    


  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
