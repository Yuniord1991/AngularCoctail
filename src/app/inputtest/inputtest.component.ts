import { Component, OnInit } from '@angular/core';

// este lo agregue para aprender a mapear x numero de ingredientes
import { RandomTeamService } from 'src/app/Service/random-team.service';
import { User } from '../Service/User';
import { Coctail } from "../models/Coctail.model";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CoctailService } from 'src/app/Service/licor/coctail.service';

@Component({
  selector: 'app-inputtest',
  templateUrl: './inputtest.component.html',
  styleUrls: ['./inputtest.component.css']
})
export class InputtestComponent implements OnInit {

  mapUsers: User[] = [];
  liquor: string;
  Ingredient: string;
  tragoIn: Coctail = new Coctail();
  Ing: string;
  Liq: string;

  constructor(private service: RandomTeamService, private coctailService: CoctailService) { }

  ngOnInit() {
    this.cargarLicores();
  }
  // todo esto es prueba para poder recibir el api consumido, mapearlo y obtener el valor de la seleccion desde el html
  cargarLicores() {
    this.service.getSecondData().subscribe((data: any) => {
      this.mapUsers = data.results;
    });
    console.log('EJECUTANDO cargar ingredientes');
  }

  recibirIngredientes() {
      this.tragoIn.Licor = this.liquor;
      this.tragoIn.Ingredientes = this.Ingredient;
      console.log(JSON.stringify(
        this.tragoIn.Nombre + JSON.stringify(this.tragoIn.Licor + this.tragoIn.Ingredientes) + this.tragoIn.Preparacion));
  }
  enviarReceta() {
    this.tragoIn.Licor = this.liquor;
    this.tragoIn.Ingredientes = this.Ingredient;
    this.coctailService.enviarCoctail(this.tragoIn).toPromise().then((result: any) => {
      console.log('LICOR GUARDADO!: ' + result.Nombre + ', ID:' + result.Id_Coctail);
    }).catch((err: any) => {
      console.log(err);
    });
  }
}
