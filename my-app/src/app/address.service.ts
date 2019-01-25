import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AddressModel } from './lsp/address.model';

@Injectable()
export class AddressService implements OnInit {

  submitedAddress = new Subject();
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  get(id: number): any {
    return this.http.get('http://192.168.2.151:8080/ws/do/address?id=' + id);
  }

  getList(): Observable<any> {
    return this.http.get('http://192.168.2.151:8080/ws/do/address');
  }

  create(address: AddressModel) {
    return this.http.put('http://192.168.2.151:8080/ws/do/address', address);
  }
}
