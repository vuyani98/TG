import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from 'src/environments/environment';
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const API_PATH = `${environment.API_PATH}`;

@Injectable({
  providedIn: 'root'
})
export class PagesService {


  constructor( private http: HttpClient) { }

  getNetworkProducts(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name=Network`);
  }

  getTurboProducts(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name=Analogue/Turbo`);
  }

  getMobileProducts(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name=Dashcam`);
  }

  getAccessControl(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name= Access Control`)
  }

}
