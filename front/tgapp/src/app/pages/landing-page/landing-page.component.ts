import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PagesService } from '../pages.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  displayVid = 'None';
  vidLink:any;
  colorvu = 'https://www.youtube.com/embed/sn_DFZJCc7U';
  acusense = 'https://www.youtube.com/embed/7nbch_TQEA0';
  axpro = 'https://www.youtube.com/embed/OeGQDqtzrz8';

  constructor(private service: PagesService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  get_all_products(){
    this.router.navigateByUrl('products/?cat=all')
  }

  showVid(tech:string){

    if (tech == 'colorvu'){
      this.vidLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.colorvu);
    }

    else if (tech=='acusense'){
      this.vidLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.acusense);
    }

    else{
      this.vidLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.axpro);
    }

    this.displayVid = 'block'
    console.log(this.vidLink)

  }

  hideVid(){
    this.displayVid = 'None'
  }

  getProducts(cat:string){
    this.router.navigateByUrl(`/products/?cat=${cat}`);
  }


}
