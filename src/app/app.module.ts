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
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsComponent } from './shared/components/items/items.component';
import {DropdownModule} from 'primeng/dropdown';
import { AuthComponent } from './components/auth/auth.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { PruductItemComponent } from './components/products/products-list/pruduct-item/pruduct-item.component';
import { HomeComponent } from './components/home/home.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
//flex-layout


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    AuthComponent,
    ProductsComponent,
    ProductsListComponent,
    PruductItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    CardModule,
    GalleriaModule,
    DropdownModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
