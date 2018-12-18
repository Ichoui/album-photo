import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { users } from '../../../environments/users';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  albumForm: FormGroup;

  tabAlbums = [];
  albumSelected;
  actualLocalStorageAlbum;
  albumTyping;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    // formulaires
    this.albumForm = new FormGroup({
      album: new FormControl(),
      password: new FormControl()
    });

    // récupère la data json de users.ts et la transforme en array
    for (let [key, value] of Object.entries(users)) {
      this.tabAlbums.push(value);
    }
    this.albumTyping = null;
    this.actualLocalStorageAlbum = LoginComponent.alreadyLogin();
  }


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
          this.auth.writeLocalStorage(this.tabAlbums[i].album);
          result = true;
        }
      }
    }
    return result;
  }


  onSubmit() {
    // check si l'album et le code d'accès existent
    // puis redirige vers l'album qu'il faut (entraîne de nouveaux traitements Guards)
    if (this.checkingAlbum()) {

      switch (this.albumSelected) {
        case 'maple':
          this.router.navigate(['/library/maple']);
          break;
        case 'banff':
          this.router.navigate(['/library/banff']);
          break;
        case 'francois':
          this.router.navigate(['/library/francois']);
          break;
      }
    }
  }

  static alreadyLogin(): string {
    let ls = localStorage.key(0);
    let result = null;

    if (localStorage.key(0)) {
      return localStorage.getItem(ls);
    }
    return result;
  }
}
