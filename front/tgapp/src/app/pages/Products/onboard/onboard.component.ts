import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.sass']
})
export class OnboardComponent implements OnInit {

  products: any

  constructor( private service: PagesService) { }

  ngOnInit(): void {

    this.products = this.service.getMobileProducts().subscribe(data => {
      console.log(data);
    });
  }

}
