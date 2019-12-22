import { Component, OnInit } from '@angular/core';
import { Licor } from 'src/app/models/Licor..model';
import { LicorService } from 'src/app/Service/licor/licor.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private licorService: LicorService) { }

  ngOnInit() {
  }

  enviarObjeto() {
    let licor: Licor = new Licor();
    licor.Nombre = 'IPA';
    licor.Marca = 'ARG';
    licor.Grado = 10;
    licor.Volumen = 400;

    this.licorService.enviarLicor(licor).toPromise().then((result: Licor) => {
      console.log('LICOR GUARDADO!: ' + result.Nombre + ', ID:' + result.Id_Licor);
    }).catch((err: any) => {
      console.log(err);
    });

  }

}
