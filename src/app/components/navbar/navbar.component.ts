import { Component } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] = [];
  itemsModles: MenuItem[] = [];
  itemsSearch: MenuItem[] = [];
  itemsInovations: MenuItem[] = [];
  itemsService: MenuItem[] = [];
  languages: Language[];
  selectedLanguage: Language;
  visibleSidebar1: boolean = false;
  visibleSidebar2: boolean = false;
  visibleSidebar3: boolean = false;
  visibleSidebar4: boolean = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.items = [
      { label: 'Mercedes-Benz', routerLink: ['/home']},
      { label: 'Models', icon: 'pi pi-fw pi-home' , command: () => this.visibleSidebar1 = true },
      { label: 'Search and Buy', icon: 'pi pi-fw pi-shopping-cart' , command: () => this.visibleSidebar2 = true },
      { label: 'Inovations', icon: 'pi pi-fw pi-phone',
      command: () => this.visibleSidebar3 = true  },
      { label: 'Service', icon: 'pi pi-fw pi-info', command: () => this.visibleSidebar4 = true },
    ];
    this.primengConfig.ripple = true;
    this.languages = [
      { name: 'EN', code: 'EN' },
      { name: 'DE', code: 'DE' },
    ];
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
    {label: 'New Cars', icon: 'pi pi-fw pi-home', routerLink: ['/search-buy'],command: () => this.visibleSidebar2 = false},
    {label:'Used Cars', icon: 'pi pi-fw pi-home', routerLink: ['/search-buy'],command: () => this.visibleSidebar2 = false},
    {label:'Build Your Own', icon: 'pi pi-fw pi-home' ,routerLink: ['/custom-build'],command: () => this.visibleSidebar2 = false},
    {label:'Find a Dealer', icon: 'pi pi-fw pi-home' ,routerLink: ['/find-dealer'],command: () => this.visibleSidebar2 = false },
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
