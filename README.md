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
  <b>Style (dans le .ts):</b><br>
   <ul><li>possibilité d'ajouter <b>un style propre à un album</b>(3 lignes : propre, générique, masonry),</li>
   <li><b>SINON</b> remplacer celle présente dans un component similaire (2 lignes : générique, masonry)
   <li><u>Attention</u> à toujours conserver le style Masonry</li>


### Déploiement - Firebase
- firebase login (optionnal)
- firebase init<ul><li>``Hosting``</li><li>Public directory : ``dist/album-photos``</li><li>App as a single page : ``YES``</li><li>File already exist, overwrite ? ``NO``</li></ul>
- firebase deploy
<br>
Script disponible dans console NPM

https://album.ichoui.fr

---
##### Ce projet est avant tout une application web tournant sous Angular 7.0. Testé sur iPhone 7Plus en responsive.
