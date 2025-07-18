import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  APIURL = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.APIURL);
  }
}
