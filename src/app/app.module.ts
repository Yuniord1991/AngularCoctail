import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// COMPONENTS
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectComponent } from './body/connect/connect.component';
import { FixedBackgroundComponent } from './body/fixed-background/fixed-background.component';
import { FirstPreviewComponent } from './body/first-preview/first-preview.component';
import { SecondPreviewComponent } from './body/second-preview/second-preview.component';
import { WelcomeBeginnerComponent } from './body/welcome-beginner/welcome-beginner.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { TeamComponent } from './team/team.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RandomTeamService } from './Service/random-team.service';
import { HttpClientModule } from '@angular/common/http';
import { ConnectOutComponent } from './connect-out/connect-out.component';
import { InputtestComponent } from './inputtest/inputtest.component';

const appRoutes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'home', component: BodyComponent},
  { path: 'connect', component: ConnectOutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    ConnectComponent,
    FixedBackgroundComponent,
    FirstPreviewComponent,
    SecondPreviewComponent,
    WelcomeBeginnerComponent,
    CarouselComponent,
    TeamComponent,
    RecipesComponent,
    ConnectOutComponent,
    InputtestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FontAwesomeModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    MatChipsModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ RandomTeamService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
