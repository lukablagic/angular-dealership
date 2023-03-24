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
import { PaintCombinations, PaintData } from '../shared/models/paint.model';

@Injectable({
  providedIn: 'root',
})
export class CarsAPIService {
  private dbCars = '/cars';
  itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<Car[]>;
  url: any;
 colors: PaintCombinations;

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {
    this.loadPayload();
  }
  loadPayload() {
    this.itemsCollection = this.firestore.collection(this.dbCars);
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((changes: any[]) => {
        return changes.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
        }));
      })
    );
    this.items.subscribe((data) => console.log(data));
  }

  getAllCars() {
    return this.items;
  }
  addCar(car: Car) {
    this.firestore
      .collection(this.dbCars)
      .add(car.toObject())
      .then(() => console.log('Car added successfully'))
      .catch((error) => console.log(error));
  }

  removeCar(car: Car) {
    this.firestore.collection(this.dbCars).doc(car.id).delete();
  }
  getColors(car: Car) {
    let url: string = environment.paintsURL + '&make=' + car.make;
    this.http.get(url).subscribe((data: PaintData) => {
      this.colors =  data.paintCombinations;
    });
    return this.colors;
  }
  getCarImage(car: Car) {
    let model: string = car.model;
    car.model = model;
    this.url =
      environment.apiBaseURL +
      '&make=' +
      car.make +
      '&modelFamily=' +
      car.model +
      '&paintId=' +
      car.paintId;
    return this.http.get(this.url, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      })
    );
  }
  getCarImageAngel(car: Car,view: string) {
    let model: string = car.model;
    car.model = model;
    this.url =
      environment.apiBaseURL +
      '&make=' +
      car.make +
      '&modelFamily=' +
      car.model +
      '&paintId=' +
      car.paintId + '&angel=' + view;
    return this.http.get(this.url, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      })
    );
  }
}
