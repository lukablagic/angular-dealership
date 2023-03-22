import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { filter, map, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Car } from '../shared/models/car.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CarsAPIService {
  itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  url: any;

  constructor(private http: HttpClient, private firestore: AngularFirestore,private sanitizer: DomSanitizer,) {
    this.loadCars();
  }
  addCar(car: Car) {
    this.firestore
      .collection('/cars')
      .add(car.toObject())
      .then(() => console.log('Car added successfully'))
      .catch((error) => console.log(error));
  }
  loadCars() {
    this.itemsCollection = this.firestore.collection('cars');
    this.items = this.itemsCollection.valueChanges();
  }

  getCars() {
    return this.items;
  }
  getCarImage(car: Car) {
    car.model = car.model.replace(' ', '-');
    this.url = environment.apiPicturesUrl + car.model;
    return this.http.get(this.url, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      })
    );
  }
  
  
}
