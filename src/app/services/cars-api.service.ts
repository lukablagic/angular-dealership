import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { filter, map, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsAPIService {
  itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private http:HttpClient,private firestore: AngularFirestore) {
    this.loadCars();
   }

loadCars() {
this.itemsCollection = this.firestore.collection('cars');
this.items = this.itemsCollection.valueChanges();
}


  getCars() {
  return this.items;
  }
}
