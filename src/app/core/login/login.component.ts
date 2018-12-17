import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { users } from '../../../environments/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  albumForm: FormGroup;

  tabAlbums = [];
  albumSelected;

  constructor(private router: Router) {
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


  dataAlbums() {
    let albumChoice = this.albumForm.value.album;
    let passwordChoice = this.albumForm.value.password;
    let result = false;

    for (let i = 0; i < this.tabAlbums.length; i++) {
      if (albumChoice === this.tabAlbums[i].album) {
        if (passwordChoice === this.tabAlbums[i].password) {
          result = true;
          this.albumSelected = this.tabAlbums[i].album;
        }
      }
    }


    /*
        this.tabAlbums.forEach(function (album) {
          if (albumChoice === album) {
            console.log('Album sélectionné : ' + album);

            result = true;
          }
        });
    */
    return result;
  }


  onSubmit() {

    this.dataAlbums();
    console.log(this.albumSelected);
    if (this.dataAlbums()) {

    } else {

    }

    // console.log(this.testingUsers());
    // this.router.navigate(['/library'])
  }

}
