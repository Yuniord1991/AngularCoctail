import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointFactoryService {

  constructor() {
  }

  getHeaders() {
    const httpheaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    // .set('Access-Control-Allow-Origin', '*');
    return { headers: httpheaders };
  }

}
