import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Image {
  previewImageSrc?;
  thumbnailImageSrc?;
  alt?;
  title?;
}
@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http
      .get<any>('assets/photos.json')
      .toPromise()
      .then((res) => <Image[]>res.data)
      .then((data) => {
        console.log(data);
        return data;
        
      });
  }
}
