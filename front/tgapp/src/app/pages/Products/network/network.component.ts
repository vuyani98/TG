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
    this.products = this.service.getNetworkProducts().subscribe(data => {
      console.log(data);
    });
    this.service.getImage('DS-2CD2026G2-I 4MM_C');
  }

}

