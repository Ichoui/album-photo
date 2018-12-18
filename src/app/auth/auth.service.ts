import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  /*
  *  @function isAuthenticated()
  *  Permet de vérifier si le localStorage album existe
  *  et donc vérifier si l'utilisateur a pu se connecter avec un bon code d'accès
  *  Lien avec le auth.guard.ts
  */
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('album');
    const keyToken = localStorage.key(0);

    // if (token === 'maple123' || token === 'banff123') {
    return keyToken === 'album';
  }

  /*
  * @function isGlobalFunction()
  * Permet de vérifier la valeur de la clef "Album" dans le localStorage
  * Retourne Nom de l'album / false
  * */
  public isGlobalFunction(album): string | boolean {
    let storage = localStorage.getItem('album');
    if (storage === album) {
      return album;
    } else {
      return false;
    }
  }
  /*
  * @function is{Album}
  * Utilisée dans le guard du même nom d'album pour autoriser ou non l'accès à la route demandée
  * */
  public isMaple(): string | boolean {
    return this.isGlobalFunction('maple');
  }

  public isBanff(): string | boolean {
    return this.isGlobalFunction('banff');
  }

  public isFrancois(): string | boolean {
    return this.isGlobalFunction('francois');
  }



  /*
  * @function logout()
  * Permet de vider à chaque logout le localStorage
  * */
  public logout() {
    localStorage.removeItem('album');
  }


  /*@function WriteLocalStorage
  * Ecrit dans le localStorage une key / value
  * album : {album}_key
  * */
  public writeLocalStorage(album): void {
    localStorage.setItem('album', album);
  }


}
