import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PersonModel } from './lsp/person.model';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable()
export class PersonService implements OnInit {

  submitedPerson = new Subject();
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  getPerson(id: number): any {
    return this.http.get('http://192.168.2.151:8080/ws/do/person?id=' + id);
  }

  getPersonList(): Observable<any> {
    return this.http.get('http://192.168.2.151:8080/ws/do/person');
  }

  createPerson(person: PersonModel) {
    return this.http.put('http://192.168.2.151:8080/ws/do/person', person);
  }
}
