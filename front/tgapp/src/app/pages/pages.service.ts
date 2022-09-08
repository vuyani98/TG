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


  constructor( private http: HttpClient, private img: CloudinaryImage) { }

  getImage(name:string){
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'tgsec'
      }
    });

    this.img = cld.image(name);
    console.log(this.img);
  }

  getNetworkProducts(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name=Network`);
  }

  getTurboProducts(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name=Analogue/Turbo`);
  }

  getMobileProducts(): Observable<any>{
    return this.http.get(`${API_PATH}/catergories/?name=Dashcam`);
  }

}
