import { Component } from '@angular/core';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent {
  titreTableau = 'Listes des contact Supprimés';
  contacts = [
    { id: 1, 
      nom: '', 
      prenom: '',
      email : '',
   },
  
  ];

  selectedContact = this.contacts[0];

  onSelect(contact: any): void {
    this.selectedContact = contact;
  }
}
