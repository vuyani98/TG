import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.sass']
})
export class NetworkComponent implements OnInit {

  products: any;
  constructor( private service: PagesService) { }

  ngOnInit(): void {
    this.service.getNetworkProducts().subscribe(data => {
      this.products = data[0].products;
      console.log(this.products)
    });


  }

}

