import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coctail } from 'src/app/models/Coctail.model';
import { environment, environmentYunior } from 'src/environments/environment';
import { EndpointFactoryService } from '../factory.service';

@Injectable({
  providedIn: 'root'
})
export class CoctailService extends EndpointFactoryService {

  constructor(private httpClient: HttpClient) {
    super();
  }
// Prueba del componente inputtest
  enviarCoctail(coctail: Coctail) {
    return this.httpClient.post(environment.urlEndPoint + '/coctailsave', JSON.stringify(coctail), this.getHeaders());
  }

  enviarRecipe(coctail: Coctail) {
    return this.httpClient.post(environmentYunior.urlEndPoint + '/api/RecetasTables', JSON.stringify(coctail), this.getHeaders());
  }

  editRecipe(id, coctail: Coctail) {
    return this.httpClient.put(environmentYunior.urlEndPoint + '/api/RecetasTables/' + id, JSON.stringify(coctail), this.getHeaders());
  }

  delRecipe(id: number) {
    return this.httpClient.delete(environmentYunior.urlEndPoint + '/api/RecetasTables/' + id, this.getHeaders());
  }

}
