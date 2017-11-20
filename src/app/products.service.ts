import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'
import { IProduct } from './product';

@Injectable()
export class ProductService {
    // private _producturl = 'assets/products.jsona';
    private _producturl = 'assets/products.json';
    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._producturl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Error) {
        console.error(error);
        return Observable.throw(error);
    }
}