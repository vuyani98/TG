import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  mega_menu_display = "none";
  cart_display = "none";
  menu_display = "none";
  products_display = "none";
  search_display = "none";
  mobile_cart_display = "block";
  mobile_sub_display = "none";
  mobile_prod_display = "none";

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

  // mega menu function
  mega_menu() {

    if (this.mega_menu_display === "none"){
      this.mega_menu_display = "block";
    }

    else{
      this.mega_menu_display = "none"
    }
  }

  // subcatergories function
  subs(catergory:any){
    this.subcatergories = catergory;
    this.products = [];
  }

  //products function
  prods(products:any){
    this.products = products
  }

  //pop ups function
  show_popup(name:string){

    if (name == "cart"){

      if (this.cart_display == "block"){
        this.cart_display = "none"
      }
      else{
        this.cart_display = "block";
      }

      this.products_display = "none";
      this.search_display = "none";
      this.menu_display = "none";

    }

    else if (name == "menu"){

      if (this.menu_display == "block"){
        this.menu_display = "none"
      }
      else{
        this.menu_display = "block";
      }

      this.cart_display = "none";
      this.products_display = "none";
      this.search_display = "none";

    }

    else if (name == "search"){

      if (this.search_display == "block"){
        this.search_display = "none"
      }
      else{
        this.search_display = "block";
      }

      this.cart_display = "none";
      this.products_display = "none";
      this.menu_display = "none";

    }

    else if (name == "products"){

      if (this.products_display == "block"){
        this.products_display = "none"
      }
      else{
        this.products_display = "block";
      }

      this.cart_display = "none";
      this.search_display = "none";
      this.menu_display = "none";

    }

  }

  //mobile menu products menu

  mobile_subs(subcatergories ? : any){

    if ( subcatergories){
      this.subcatergories = subcatergories;
    }

    if (this.mobile_cart_display == "block"){

      this.mobile_sub_display = "block"
      this.mobile_cart_display = "none";
      this.mobile_prod_display = "none"

    }

    else{

      this.mobile_sub_display = "none"
      this.mobile_cart_display = "block";
      this.mobile_prod_display = "none"

    }

  }

  mobile_prod(products ? : any){

    if ( products){
      this.products = products;
    }

    if (this.mobile_sub_display == "block"){

      this.mobile_sub_display = "none"
      this.mobile_cart_display = "none";
      this.mobile_prod_display = "block"

    }

    else{

      this.mobile_sub_display = "block"
      this.mobile_cart_display = "none";
      this.mobile_prod_display = "none"

    }

  }

}
