import { Component, OnInit, Output } from '@angular/core';
// este lo agregue para aprender a mapear x numero de ingredientes
import { RandomTeamService } from 'src/app/Service/random-team.service';
import { User } from '../Service/User';
import { Coctail } from 'src/app/models/Coctail.model';
import { CoctailService } from 'src/app/Service/licor/coctail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

//  mapUser era para consumir el api en el mat select en opciones
  mapUsers: User[] = [];

  // liquor: string;
  // Ingredient: string;
  tragoIn: Coctail = new Coctail();
  Tragos: Coctail[] = [];

  constructor(
    private service: RandomTeamService,
    private coctailService: CoctailService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit() {
   this.ListarRecetas();
  }

  ListarRecetas() {
    this.service.getDataRecipes().subscribe((data: any) => { this.Tragos = data; });
    console.log('EJECUTANDO ListarRecetas');
  }

  enviarRecip() {
    if (this.tragoIn.Id_Receta == null) {
      this.coctailService.enviarRecipe(this.tragoIn).toPromise().then((result: any) => {
        console.log('RECETA GUARDADA!: ' + result.Nombre + ', ID:' + result.Id_Receta);
      }).catch((err: any) => {
        console.log(err);
      });
      if (this.tragoIn.Nombre !== '') {
        this.openSnackBar('Recipe ' + this.tragoIn.Nombre + ' Saved!');
        this.tragoIn = new Coctail();
      }
    } else {
    this.coctailService.editRecipe(this.tragoIn.Id_Receta, this.tragoIn).toPromise().then((result: any) => {
      console.log('Editado');
      this.openSnackBar('Saved changes in ' + this.tragoIn.Nombre + ' Recipe!');
      this.tragoIn = new Coctail();
    }).catch((err: any) => {
      console.log(err);
    });
    }
  }

  edit(T: Coctail) {
    console.log(T + ' enviado al form');
    this.tragoIn = T;
  }

  delRecip() {
    this.coctailService.delRecipe(this.tragoIn.Id_Receta).toPromise().then((result: any) => {
      console.log('Borrado');
      this.openSnackBar(this.tragoIn.Nombre + ' deleted!');
      this.tragoIn = new Coctail();
    }).catch((err: any) => {
      console.log(err);
    });
  }

  openSnackBar(sentence: any) {
    this.snackBar.open(sentence, 'Close', {
      duration: 3400
    });
  }

  goToUpdateComponent(id: number) {
    console.log(id + ' received');
    this.router.navigate(['recipes/editrecipe', { id }]);
  }

    // todo esto es prueba para poder recibir el api consumido, mapearlo y obtener el valor de la seleccion desde el html
  // cargarLicores() {
  //   this.service.getSecondData().subscribe((data: any) => {
  //     this.mapUsers = data.results;
  //   });
  //   console.log('EJECUTANDO cargar ingredientes');
  // }

  // recibirIngredientes() {
  //     this.tragoIn.Licor = this.liquor;
  //     this.tragoIn.Ingredientes = this.Ingredient;
  //     console.log(JSON.stringify(
  //       this.tragoIn.Nombre + JSON.stringify(this.tragoIn.Licor + this.tragoIn.Ingredientes) + this.tragoIn.Preparacion));
  // }
}

