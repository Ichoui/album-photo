# AlbumPhotos

### Commandes utiles
`npm start` : Lance le projet en mode développement sur `http://localhost:4682`. <br><b>Astuce :</b> Test sur téléphone via <i><adresse-ip-locale>:4682</i> sur le <u>même réseau WIFI</u>   

### Nouvel album - procédure :
 - Créer la ``route`` dans ``app-routing.module.ts``
 - Créer un ``guard`` associé dans ``config/routes-guards`` (ng g g /path)
 - Créer une fonction ``get{newAlbum}`` qui consomme l'API dans le service ``config/api-rest-service``
 - Créer une fonction is{newAlbum} dans le service /config/auth/auth.service
 - Ajouter une ``règle`` dans la fonction ``onSubmit()`` situé dans ``/core/login/login.component.t``/
 - Ajouter une ``règle de redirection`` dans ``/core/library/library.component.ts``
 - Créer le ``component`` associé (ng g c /core/library/{newalbum}), puis
   récupérer le contenu d'un .html et .ts d'un component similaire <br>
  <b>Style :</b><br>
   <ul><li>possibilité d'ajouter ``un style propre à un album`` via le .scss,</li>
   <li><b>SINON</b> changer la ligne du style dans le .ts associé par ``'../library.component.scss'``</li></ul>

---
##### Ce projet est avant tout une application web tournant sous Angular 7.0. Testé sur iPhone 7Plus en responsive.
