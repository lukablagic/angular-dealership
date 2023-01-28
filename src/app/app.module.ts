import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//primeng
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './shared/components/items/items.component';
import {DropdownModule} from 'primeng/dropdown';
import { AuthComponent } from './components/auth/auth.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { PruductItemComponent } from './components/products/products-list/pruduct-item/pruduct-item.component';
//flex-layout


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ItemsComponent,
    AuthComponent,
    ProductsComponent,
    ProductsListComponent,
    PruductItemComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
