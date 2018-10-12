import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CityService } from "src/app/services/city.service";
import { City } from "src/app/models/city";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";
import { Photo } from "src/app/models/photo";

@Component({
  selector: "app-city-detail",
  templateUrl: "./city-detail.component.html",
  styleUrls: ["./city-detail.component.css"],
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  city: City;
  photos: Photo[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"]);
      this.getPhotosByCity(params["cityId"]);
    });
  }

  getCityById(cityId) {
    this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;
    });
  }

  getPhotosByCity(cityId) {
    this.cityService
      .getPhotosByCity(cityId)
      .subscribe(data => {
        this.photos = data;
        this.setGallery()});
  }

  getImages(){
    const imageUrls=[]
    for(let i =0;i<this.photos.length;i++){
      imageUrls.push({
        small:this.photos[i].url,
        medium:this.photos[i].url,
        big:this.photos[i].url,
      })
    }
    return imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: "100%",
        height: "400px",
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
  }
}
