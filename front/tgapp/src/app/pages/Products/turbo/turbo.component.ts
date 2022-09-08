import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';
@Component({
  selector: 'app-turbo',
  templateUrl: './turbo.component.html',
  styleUrls: ['./turbo.component.sass']
})
export class TurboComponent implements OnInit {

  products: any
  constructor( private service: PagesService) { }

  ngOnInit(): void {

    this.products = this.service.getTurboProducts().subscribe(data => {
      console.log(data);
    });
  }

}
