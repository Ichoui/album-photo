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
          result = true;
          this.albumSelected = this.tabAlbums[i].album;
          console.log(this.albumSelected);
          this.auth.WriteLocalStorage(this.tabAlbums[i].album, '123');
        }
      }
    }

    return result;
  }


  onSubmit() {
    // check si l'album et le code d'accès existent
    if (this.checkingAlbum()) {
      if (this.albumSelected === 'maple') {
        console.log(this.albumSelected);
        this.router.navigate(['/library/maple']);
      } else if (this.albumSelected === 'banff') {

      }
      else if (this.albumSelected === 'francois') {

      }
    }
  }

}
