import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:56073/api';
  readonly PhotoUrl = 'http://localhost:56073/Photos/';

  constructor(private http: HttpClient) {}

  getProdList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Products');
  }

  addProducts(val: any) {
    return this.http.post(this.APIUrl + '/products', val);
  }

  updateProducts(val: any) {
    return this.http.put(this.APIUrl + '/products', val);
  }

  deleteProducts(val: any) {
    return this.http.delete(this.APIUrl + '/products/' + val);
  }

  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + '/products/Savefile', val);
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/products/GetAllProductName');
  }
}
