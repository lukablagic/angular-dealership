import { Component } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CarsAPIService } from 'src/app/services/cars-api.service';
import { Role } from 'src/app/shared/models/user';

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
  itemsAdmin: MenuItem[] = [];
  itemsModles: MenuItem[] = [];
  itemsSearch: MenuItem[] = [];
  itemsInovations: MenuItem[] = [];
  itemsService: MenuItem[] = [];
  languages: Language[];
  selectedLanguage: Language;
  visibleSidebar1: boolean = false;
  isAdmin: Observable<boolean>;
  constructor(private primengConfig: PrimeNGConfig, public auth: AuthService, private carsApi: CarsAPIService) {
    this.isAdmin=  this.carsApi.getUserRoleAdmin()
  }

  ngOnInit() {
    this.items = [
      { label: 'Best Cars', routerLink: ['/home'], icon: 'pi pi-fw pi-car' },
      {
        label: 'Search and Buy',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['/search-buy'],
      },

    ];
    this.itemsAdmin = [
      { label: 'Best Cars', routerLink: ['/home'], icon: 'pi pi-fw pi-car' },
      {
        label: 'Search and Buy',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['/search-buy'],
      },
      {
        label: 'Add cars',
        icon: 'pi pi-fw pi-info',
        routerLink: ['/addcars'],
      },
    ];
    this.primengConfig.ripple = true;
    this.languages = [
      { name: 'EN', code: 'EN' },
      { name: 'DE', code: 'DE' },
    ];
  }

}
