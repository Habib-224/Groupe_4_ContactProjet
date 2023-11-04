import { Component } from '@angular/core';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
 public contacts : any [] = [
  {
    nomUser : "",
    prenomUser : "",
    emailUser : "",

    id : "",
    nomContact : "fall",
    prenomContact : "amadem",
    telephone : "771322323",
    emailContact : "Gorgui23@gmail.com",
    imageUrl : "",

  },
 ];
 public saveContact (contacts: any){
  localStorage.setItem('contacts', JSON.stringify(contacts));

 }
}
