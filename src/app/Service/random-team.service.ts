import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmentYunior } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomTeamService {

  constructor(
    private httpClient: HttpClient
    ) {
    console.log('Service is working!');
  }

  getData() {
    return this.httpClient.get('https://randomuser.me/api/?results=15&nat=us,es&inc=id,name,nat,dob,picture');
  }

  // este lo agregue para aprender a mapear x numero de ingredientes, utilizando nombres de randomuser
  getSecondData() {
    return this.httpClient.get('https://randomuser.me/api/?results=8&inc=name');
  }

  getDataRecipes() {
return this.httpClient.get( environmentYunior.urlEndPoint + '/listado');
  }
}
