import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import * as firebase from 'firebase/auth';
import 'firebase/auth';
import { Role, User } from '../shared/models/user';
import { CarsAPIService } from './cars-api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  role: Role;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private carsApi: CarsAPIService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   
  }

  async googleSignIn() {
    const provider = new firebase.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }
  private updateUserData({ uid, email, displayName, photoURL }: User) {
    const userRef = this.afs.doc<User>(`users/${uid}`);
    const role: Role = { user: true };
    const data = {
      uid,
      email,
      displayName,
      photoURL,
      role,
    };
    return userRef.set(data, { merge: true });
  }

  getUser() {
    return this.user$;
  }
}
