import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { City } from "../models/city";
import { Photo } from "../models/photo";

@Injectable({
  providedIn: "root"
})
export class CityService {
  constructor(private httpClient: HttpClient) {}
  path = "http://localhost:62381/api/";

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "cities");
  }

  getCityById(cityId):Observable<City> {
    return this.httpClient.get<City>(this.path+"cities/detail/?cityId="+cityId);
  }

  getPhotosByCity(cityId):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+"cities/photos/?cityId="+cityId)
  }

  addCity(city){
    this.httpClient.post(this.path+"cities/add",city).subscribe();
  }

}
