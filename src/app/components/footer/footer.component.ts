import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
itemsModles: MenuItem[] = [];
itemsSearch: MenuItem[] = [];
itemsInovations:MenuItem[] = [];
itemsService: MenuItem[] = [];


ngOnInit() {
  this.itemsModles = [
    {label: 'A-Class', icon: 'pi pi-fw pi-home'},
    {label: 'B-Class', icon: 'pi pi-fw pi-home'},
    {label: 'C-Class', icon: 'pi pi-fw pi-home'},
    {label: 'E-Class', icon: 'pi pi-fw pi-home'},
    {label: 'S-Class', icon: 'pi pi-fw pi-home'},
    {label: 'V-Class', icon: 'pi pi-fw pi-home'},
    {label: 'G-Class', icon: 'pi pi-fw pi-home'},
  ];
  this.itemsSearch = [
    {label: 'New Cars', icon: 'pi pi-fw pi-home'},
  {label:'Used Cars', icon: 'pi pi-fw pi-home'},
  {label:'Build Your Own', icon: 'pi pi-fw pi-home'},
  {label:'Find a Dealer', icon: 'pi pi-fw pi-home'},
  ];
  this.itemsInovations = [
  {label: 'Electric Vehicles', icon: 'pi pi-fw pi-home'},
  {label: 'Hybrid Vehicles', icon: 'pi pi-fw pi-home'},
  {label: 'Plug-in Hybrid Vehicles', icon: 'pi pi-fw pi-home'},
  ];
  this.itemsService = [
  {label:"Actueal Offers", icon: 'pi pi-fw pi-home'},
  {label:"Mercedes-Benz Service", icon: 'pi pi-fw pi-home'},
  {label:"Mercedes-Benz Financial Services", icon: 'pi pi-fw pi-home'},
  ];
}

}
