import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  mega_menu_display = "none";

  catergories = {
    "Network" : {
        "Network Cameras" : [ "ColorVu Series", "AcuSense"],
        "NVR" : ["4-CH NVR", "8-CH NVR"]
    },
    "TurboHD" : {},
    "Display & Control" : {},
    "Mobile" : {},
    "Access Control" : {},
    "Video Intercomm" : {},
    "Alarm" : {},
    "Thermal" : {},
    "Accesories" : {},
    "Software" : {}
  };

  subcatergories = {};
  products = [];


  constructor() { }

  ngOnInit(): void {
  }

  mega_menu() {

    if (this.mega_menu_display === "none"){
      this.mega_menu_display = "block";
    }

    else{
      this.mega_menu_display = "none"
    }
  }

  subs(catergory:any){
    this.subcatergories = catergory;
    this.products = [];
  }

  prods(products:any){
    this.products = products
  }
}
