import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../shared/models/class.model';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
classes: Promise<Class[]> ;


  constructor(public http:HttpClient) {
    
   }






}


