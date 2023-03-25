import { Component } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private primengConfig: PrimeNGConfig,public auth:AuthService) {}

  ngOnInit() {
    this.items = [
      { label: 'Best Cars', routerLink: ['/home'], icon: 'pi pi-fw pi-car' },
      { label: 'Search and Buy', icon: 'pi pi-fw pi-shopping-cart' ,routerLink: ['/search-buy']},
      { label: 'Service and Repair', icon: 'pi pi-fw pi-info', routerLink: ['/service'] },
      { label: 'News and Reviews', icon: 'pi pi-fw pi-info',routerLink: ['/news'] },
      { label: 'Sell your Car', icon: 'pi pi-fw pi-info',routerLink: ['/sell-car'] },
      { label: 'Add cars', icon: 'pi pi-fw pi-info',routerLink: ['/addcars'] },
    ];
    this.primengConfig.ripple = true;
    this.languages = [
      { name: 'EN', code: 'EN' },
      { name: 'DE', code: 'DE' },
    ];

  }



}
