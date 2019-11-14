import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  /*
  *  @param
  *  Permet de vérifier si la sessionStorage album existe
  *  et donc vérifier si l'utilisateur a pu se connecter avec un bon code d'accès
  *  Lien avec le auth.guard.ts
  */
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('album');
    const keyToken = sessionStorage.key(0);
    return keyToken === 'album';
  }

  /*
  * @param
  * Permet de vérifier la valeur de la clef "Album" dans le localStorage
  * Retourne Nom de l'album / false
  * */
  public isGlobalFunction(album): string | boolean {
    let storage = sessionStorage.getItem('album');
    if (storage === album) {
      return album;
    } else {
      return false;
    }
  }
  /*
  * @param
  * is{Album}
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

  public isJump(): string | boolean {
    return this.isGlobalFunction('jump');
  }


  /*
  * @param
  * Permet de vider à chaque logout le localStorage puis redirige hors de l'application
  * */
  public logout(): void {
    sessionStorage.removeItem('album');
    this.router.navigate(['login'])
  }


  /*@param
  * Ecrit dans le localStorage une key / value
  * album : {album}_key
  * */
  public writeSessionStorage(album): void {
    sessionStorage.setItem('album', album);
  }


}
