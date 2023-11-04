import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  // Debut Section Declaration Tableau d'objet
  public user: any[] = [
    {
      id: '',
      email: '',
      password: '',
      contact: [{
        id: '',
        nom: '',
        prenom: '',
        email:'',
        numero: '',
        photo:''
      }]
    }
  ]
  // Fin Section Declaration Tableau d'objet


  // Donnee afficher cacher formulaire et valeur du ngmodel
  public changeform: boolean = true;

  formData = {
    email: '',
    pass: ''
  };

  formDataregister = {
    emailregister: '',
    passregister:''
  }

  public showform():void {
    this.changeform = !this.changeform;
  }
  // Fin Donne afficher cacher formulaire et valeur ngmodel


  tabuser: any = [];
  // Constructeur qui va nous permettre de rediriger vers la page d'accueil
  constructor(private router: Router) {
  }
  // Fin Constructeur-----------------------

  public storedUsers: any;

   ngOnInit(): void {
      // localStorage.setItem('products', JSON.stringify(this.user));
      this.storedUsers = localStorage.getItem('user');
    //  alert("les donnes du local" + JSON.stringify(storedUsers));
       if (this.storedUsers) {
         // Si des données sont présentes dans le local storage, désérialisez-les et mettez-les à jour dans votre tableau d'utilisateurs
         this.user = JSON.parse(this.storedUsers);
       } else {
         // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
         localStorage.setItem('user', JSON.stringify(this.user));
      }
  }

  userid: any = 0;
  submitFunction(event: Event):void {
    event.preventDefault();
    if (this.formData.email !== '' && this.formData.pass !== '') {
      let email = this.formData.email
      let pass = this.formData.pass;

      let userFound = this.user.find(user => user.email === this.formData.email && user.password === this.formData.pass);
      if (userFound) {
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenu\n '+email,
        showConfirmButton: false,
        timer: 1500
      })
        this.router.navigate(['/accueil']);
      }else{
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou Mot de passe incorrecte',
        })
      }
    }else{
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Les Informations que vous avez saisies sont incorrectes!',
      })
    }
  }

  Registerfunction(event: Event) {
    event.preventDefault();
    if (this.formDataregister.emailregister !== '' && this.formDataregister.passregister !== '') {
      this.userid++
      let email = this.formDataregister.emailregister
      let pass = this.formDataregister.passregister;

      this.user[0].id =this.userid ;
      this.user[0].email = email;
      this.user[0].password = pass;

      localStorage.setItem('user', JSON.stringify(this.user));
      Swal.fire({
       position: 'center',
       icon: 'success',
       title: 'Bienvenu\n '+this.formDataregister.emailregister,
       showConfirmButton: false,
       timer: 1500
      })
      this.router.navigate(['/accueil']);
      //
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Les Informations que vous avez saisies sont incorrectes!',
      })
    }
  }
}
