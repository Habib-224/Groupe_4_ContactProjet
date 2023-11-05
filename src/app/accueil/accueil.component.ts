import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  // afficheContact = JSON.parse(localStorage.getItem('contacts') || "{}") ;
  // Debut Section Declaration Tableau d'objet
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
constructor(private router: Router) {}

onSubmit(): void {
  // Stockez les données du formulaire dans le localStorage


  localStorage.setItem('contactadd', JSON.stringify(this.contactadd));

  // Redirigez l'utilisateur vers un autre composant ou une autre page
  // this.router.navigate(['/accueil-composant']);

}
contactadd = {
  id: '',
  nom: '',
  prenom: '',
  email:'',
  numero: '',
  photo: '',
  etat : 0
}
public  recupData : any;

ngOnInit(): void {
  // Récupérez les données du localStorage lors de l'initialisation du composant
  // const recupDataString = localStorage.getItem('contactadd ');
  // if (recupDataString) {
  //   this.recupData = JSON.parse(recupDataString);
  // }

  this. recupData= localStorage.getItem('contactdata');
  //  alert("les donnes du local" + JSON.stringify(this.storedUsers));
   if (this. recupData) {
     // Si des données sont présentes dans le local storage, désérialisez-les et mettez-les à jour dans votre tableau d'utilisateurs
     this.contactdata = JSON.parse(this. recupData);
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     localStorage.setItem('user', JSON.stringify(this.contactdata));
 }
}

}

