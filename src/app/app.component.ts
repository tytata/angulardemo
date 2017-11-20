import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
// import {appService} from './'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'app';
  iproducts: IProduct[];
  statusMessage: string;
  constructor(private _product: ProductService) { }

  ngOnInit() {
    this._product.getProducts()
      .subscribe(ipro => this.iproducts = ipro,
      (error) => {
        this.statusMessage = 'Problem with service! Please try again!';
        console.error(error);
      });
  }
}
