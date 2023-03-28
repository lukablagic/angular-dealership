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
import { CarOrder } from '../shared/models/car-order';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class CarsAPIService {
  private dbCars = '/cars';
  private dbOrders = '/orders';
  private dbUsers = '/users';
  itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<Car[]>;
  ordersCollection: AngularFirestoreCollection<CarOrder>;
  orders: Observable<CarOrder[]>;
  usersCollection: AngularFirestoreCollection<User>;
  carsByUser: Observable<Car[]>;
  ordersByUser: Observable<CarOrder[]>;
  url: any;
  colors: PaintCombinations;
  date: Date;

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {
    this.loadPayload();
    this.getOrdersPayload();
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
      this.colors = data.paintCombinations;
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
  getCarImageAngel(car: Car, view: string) {
    let model: string = car.model;
    car.model = model.replace(' ', '-');
    this.url =
      environment.apiBaseURL +
      '&make=' +
      car.make +
      '&modelFamily=' +
      car.model +
      '&paintId=' +
      car.paintId +
      '&angle=' +
      view;
    console.log(this.url);
    return this.http.get(this.url, { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      })
    );
  }
  //parameters car: Car, userId: string
  buyCar(carId: string, userId: string) {
    let currnetDate = this.getCurrentDate();
    let order: CarOrder = new CarOrder(carId, userId, currnetDate);
    this.firestore.collection(this.dbOrders).add(order.toObject());
    this.firestore.collection(this.dbCars).doc(carId).update({ sold: true });
  }

  getOrdersPayload() {
    this.ordersCollection = this.firestore.collection(this.dbOrders);
    this.orders = this.ordersCollection.snapshotChanges().pipe(
      map((changes: any[]) => {
        return changes.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
        }));
      })
    );
  }
  getUsersPayload() {
    this.usersCollection = this.firestore.collection(this.dbUsers);
    return this.usersCollection.snapshotChanges().pipe(
      map((changes: any[]) => {
        return changes.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
        }));
      })
    );
  }
  getCurrentDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  getOrders() {
    return this.orders;
  }
  
  getOrdersByUser (userId: string): Observable<CarOrder[]> {
    this.itemsCollection = this.firestore.collection(this.dbOrders, (ref) =>
      ref.where('userId', '==', userId)
    );
    this.ordersByUser = this.itemsCollection.snapshotChanges().pipe(
      map((changes: any[]) => {
        return changes.map((a) => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data(),
          }));
      })
    );
    
    return this.ordersByUser;
  }



  // remove order and car availability from db  
  removeOrder(order: CarOrder) {
    this.firestore.collection(this.dbOrders).doc(order.id).delete();
    this.firestore.collection(this.dbCars).doc(order.carId).update({ sold: false });
  }
}
