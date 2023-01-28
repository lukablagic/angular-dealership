import { Component } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';

interface Language {
    name: string,
    code: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] = [];
  languages: Language[];
  selectedLanguage: Language;

 

  ngOnInit() {
    this.items = [
      { label: 'E-Commerce Store' },
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Products', icon: 'pi pi-fw pi-shopping-cart' },
      { label: 'Contact', icon: 'pi pi-fw pi-phone' },
      { label: 'About', icon: 'pi pi-fw pi-info' },
    ];
    this.languages = [
        {name: 'EN', code: 'EN'},
        {name: 'DE', code: 'DE'},

    ];
  }
 
}
