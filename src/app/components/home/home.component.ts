import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ClassService } from 'src/app/services/class.service';
import { PhotoService } from 'src/app/services/photo.service';
import { Class } from 'src/app/shared/models/class.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: any[] = [
    {
        "previewImageSrc": "https://www.mercedes-benz.si/content/slovenia/sl/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3326470629442.jpg/mercedes-benz-glc-suv-x254-home-stage-3840x1707-05-2022.jpg",
        "thumbnailImageSrc": "https://www.mercedes-benz.si/content/slovenia/sl/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3326470629442.jpg/mercedes-benz-glc-suv-x254-home-stage-3840x1707-05-2022.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
      "previewImageSrc": "https://www.mercedes-benz.si/passengercars/content-pool/marketing-pool/product-page-stages/gla-h247-stage-offers/_jcr_content/par/stageelement.MQ6.0.stage.20230118143555.jpeg",
      "thumbnailImageSrc": "https://www.mercedes-benz.si/passengercars/content-pool/marketing-pool/product-page-stages/gla-h247-stage-offers/_jcr_content/par/stageelement.MQ6.0.stage.20230118143555.jpeg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },    {
    "previewImageSrc": "https://www.mercedes-benz.si/content/slovenia/sl/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3326470629442.jpg/mercedes-benz-glc-suv-x254-home-stage-3840x1707-05-2022.jpg",
    "thumbnailImageSrc": "https://www.mercedes-benz.si/content/slovenia/sl/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3326470629442.jpg/mercedes-benz-glc-suv-x254-home-stage-3840x1707-05-2022.jpg",
    "alt": "Description for Image 1",
    "title": "Title 1"
},];
classes: Class [];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(public classService:ClassService,private http: HttpClient) { }

  ngOnInit() {
 this.http.get<Class[]>('../assets/class.json').subscribe((data: Class[]) => {
  this.classes = data;
});
}

}