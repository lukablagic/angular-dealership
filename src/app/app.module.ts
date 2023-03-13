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
import { AuthComponent } from './components/auth/auth.component';
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
import { CarItemComponent } from './components/search-buy/car-list/car-item/car-item.component';
import {ImageModule} from 'primeng/image';
//firestore
import {provideFirestore,getFirestore} from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { config } from 'rxjs';
import { AddcarsComponent } from './components/addcars/addcars.component';

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
    HomeComponent,
    FooterComponent,
    SearchBuyComponent,
    CarListComponent,
    CarItemComponent,
    AddcarsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    BrowserModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    CardModule,
    AngularFireModule,
    ImageModule,
    GalleriaModule,
    DropdownModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
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
