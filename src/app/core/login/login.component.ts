import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { users } from '../../../environments/users';
import { Router } from '@angular/router';
import { AuthService } from '../../config/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  albumForm: FormGroup;

  tabAlbums = [];
  albumSelected;
  actualLocalStorageAlbum = LoginComponent.alreadyLogin();
  albumTyping = null;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    // AngularForm
    this.albumForm = new FormGroup({
      album: new FormControl(),
      password: new FormControl()
    });

    this.createUserTab();
  }

  /*
  * Transformation de l'array d'identifiants contenu dans users.ts
  * Entrée : objects array
  * Sortie : json array
  * */
  createUserTab() {
    // récupère la data json de users.ts et la transforme en array
    for (let [key, value] of Object.entries(users)) {
      this.tabAlbums.push(value);
    }
  }


  /*
  * @albumChoice, @passwordChoice : récupère les valeurs du formulaire
  * @result : valeur qui sera retournée par la fonction
  * Boucle @for : Parcourt json array contenant les identifiants
  * Condition 1 @if : Vérifie si variable @albumChoice est contenu dans json array
  * Condition 2 @if : Vérifie si variable @passwordChoice est associé à la variable @album choice
  * Création d'une variable globale au nom de l'album
  * Utilise service d'authentification pour écrire en sessionStorage le nom de l'album
  * Return @result : true / false
  * */
  checkingAlbum() {
    let albumChoice = this.albumForm.value.album;
    let passwordChoice = this.albumForm.value.password;
    let result = false;

    for (let i = 0; i < this.tabAlbums.length; i++) {
      // si album existe
      if (albumChoice === this.tabAlbums[i].album) {
        // si password associé à album existe
        if (passwordChoice === this.tabAlbums[i].password) {
          // album vers lequel on se dirige
          this.albumSelected = this.tabAlbums[i].album;
          this.auth.writeSessionStorage(this.tabAlbums[i].album);
          result = true;
        }
      }
    }
    return result;
  }

  /*
  * Check si album & code accès du login existent via @checkingAlbum()
  * Si oui : redirige vers la route demandée
  * */
  onSubmit() {
    if (this.checkingAlbum()) {
      switch (this.albumSelected) {
        case 'maple':
          window.location.href = '/library/maple';
          // this.router.navigate(['/library/maple']);
          break;
        case 'banff':
          window.location.href = '/library/banff';
          // this.router.navigate(['/library/banff']);
          break;
        case 'francois':
          window.location.href = '/library/francois';
          // this.router.navigate(['/library/francois']);
          break;
      }
    }
  }

  // Vérifie si l'utilisateur est déjà login
  // Renvoie null ou nom de session
  static alreadyLogin(): string {
    let ls = sessionStorage.key(0);
    let result = null;

    if (sessionStorage.key(0)) {
      return sessionStorage.getItem(ls);
    }
    return result;
  }
}
