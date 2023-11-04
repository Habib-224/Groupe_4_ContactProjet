import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {
    path:"",component:AccueilComponent,
  },
  {
    path : 'ajout', component:NewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
