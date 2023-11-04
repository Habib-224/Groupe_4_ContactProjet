import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { MenuComponent } from './menu/menu.component';
import { CouleurfondDirective } from './couleurfond.directive';
import { NewContactComponent } from './new-contact/new-contact.component';
import { RouterModule } from '@angular/router';
import { StatistiqueComponent } from './statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AccueilComponent,
    CorbeilleComponent,
    MenuComponent,
    CouleurfondDirective,
    NewContactComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
