import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {
  titreTableau = 'Listes des contact Supprimés';
  contacts = [
    { id: 1, nom: 'Fall', prenom: 'Abdou', email : 'abdoufall@gmail.com', },
    { id: 2, nom: 'Sene', prenom: 'Ciré', email : 'cirésene@gmail.com', },
    { id: 3, nom: 'Diop', prenom: 'Fatou', email : 'fatoudiop@gmail.com', },
    { id: 4, nom: 'Aby', prenom: 'Sy', email : 'abysy@gmail.com ', },
    { id: 5, nom: 'Fallou', prenom: 'Ndiaye', email : 'falloundiaye@gmail.com ', },
  ];
  searchText = ''; 
  
  supprimerContact(id: number) {
      // Recherché l'index du contact à supprimer
      const index = this.contacts.findIndex(contact => contact.id === id);
      // Si l'index est trouvé, supprimer le contact du tableau
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
  }
   ngOnInit() {
    
    // Convertir le tableau en une chaîne JSON
    const contactsStr = JSON.stringify(this.contacts);

    // Stocker la chaîne JSON dans le stockage local
    localStorage.setItem('contacts', contactsStr);

   }
   
  ajouterContactAuLocalStorage() {
      const nouveauContact = {
        id: this.contacts.length + 1, 
        // Générez un nouvel ID unique
        nom: 'Nouveau',
        prenom: 'Contact',
        email: 'nouveaucontact@gmail.com'
      };
    
      this.contacts.push(nouveauContact);
      this.mettreAJourLocalStorage();
    }

  private mettreAJourLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
