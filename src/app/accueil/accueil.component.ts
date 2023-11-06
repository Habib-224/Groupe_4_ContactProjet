import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Contact } from './contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent  implements OnInit    {


  public contact  : Contact = new Contact();

// declaration du tableau d'objet general
 public contactdata: any[] = [
  {
    id: '1',
    email: 'papaamdem@gmail.com',
    password: 'habib',
    contact: [{
      id: '',
      nom: '',
      prenom: '',
      email:'',
      numero: '',
      photo: '',
      etat :'0'
    }]
  },
];

contactdetail: any = {
  id: '',
  nom: '',
  prenom: '',
  email:'',
  numero: '',
  photo: '',
}

constructor(private router: Router) {}

onSubmit(): void {
  // Stockez les données du formulaire dans le localStorage
  localStorage.setItem('contactdetail', JSON.stringify(this.contactdetail));

  // Redirigez l'utilisateur vers un autre composant ou une autre page
  this.router.navigate(['/accueil.component']);
}
viewContact: any;
ngOnInit(): void {
  // Récupérez les données du localStorage lors de l'initialisation du composant
  const viewContactString = localStorage.getItem('contactdetail');
  if (viewContactString) {
    this.viewContact = JSON.parse(viewContactString);
  }
}

}

