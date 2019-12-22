import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Licor } from 'src/app/models/Licor..model';
import { environment } from 'src/environments/environment';
import { EndpointFactoryService } from '../factory.service';

@Injectable({
  providedIn: 'root'
})
export class LicorService extends EndpointFactoryService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  enviarLicor(licor: Licor) {
    return this.httpClient.post(environment.urlEndPoint + '/licorsave', JSON.stringify(licor), this.getHeaders());
  }

}
