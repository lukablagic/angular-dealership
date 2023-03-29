import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { PruductItemComponent } from './components/products/products-list/pruduct-item/pruduct-item.component';
import { HomeComponent } from './components/home/home.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBuyComponent } from './components/search-buy/search-buy.component';
import { CarListComponent } from './components/search-buy/car-list/car-list.component';
import { CarItemComponent } from '../app/components/search-buy/car-list/car-item/car-item.component';
import {SliderModule} from 'primeng/slider';
import {ImageModule} from 'primeng/image';
//firestore
import {provideFirestore,getFirestore} from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { config } from 'rxjs';
import { AddcarsComponent } from './components/addcars/addcars.component';
import { CarFormComponent } from './shared/components/car-form/car-form.component';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import { AdminCarsComponent } from './components/admin-cars/admin-cars.component';
import { AdminCarListComponent } from './components/admin-cars/admin-car-list/admin-car-list.component';
import { AdminCarItemComponent } from './components/admin-cars/admin-car-list/admin-car-item/admin-car-item.component';
import { FiltersComponent } from './shared/components/filters/filters.component';
import { DetailedCarComponent } from './shared/components/detailed-car/detailed-car.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart/cart-list/cart-item/cart-item.component';
import { ToastModule } from 'primeng/toast';
//flex-layout


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ProductsComponent,
    ProductsListComponent,
    PruductItemComponent,
    HomeComponent,
    FooterComponent,
    SearchBuyComponent,
    CarListComponent,
    CarFormComponent,
    CarItemComponent,
    AddcarsComponent,
    AdminCarsComponent,
    AdminCarListComponent,
    AdminCarItemComponent,
    FiltersComponent,
    DetailedCarComponent,
    CartComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    BrowserModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    DialogModule,
    CardModule,
    OverlayPanelModule,
    SliderModule,
    AngularFireModule,
    ToastModule,
    ImageModule,
    GalleriaModule,
    DropdownModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    CheckboxModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
