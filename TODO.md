# TODO

## 🎯 To do
-


## ✅ Done
- [x] Copie des fichiers media et renommage des dossiers Id




## Main tasks
- #1 - Prendre en main le html, css, js : inspecteur, console.log
- #2 - Importer les datas : fetch json
- #3 - Intégrer la page d'accueil : accessibilité DOM/HTML/CSS, étendre photographerFactory
- #4 - Gérer la navigation entre la page accueil et la page photographe : aria-label, gérer le focus, rapport d'accessibilité de la page d'accueil
- #5 - Afficher le contenu statique de la page photographe : HTML/CSS, photographerFactory, factory pour les media (image ou vidéo)
- #6 - Créer la modale de contact : gestion du formulaire, style, focus, role, aria-label, pas de tests (simple console.log)
- #7 - Gérer les médias de la Lightbox : lorsque vous cliquez sur une photographie, faire défiler les autres photographies, se ferme au clic sur le bouton de fermeture, aria-label et le rôle de votre LightBox
- #8 - Afficher et gérer les likes : gérer le nombre de likes total depuis photographerFactory, L’utilisateur ne doit pouvoir liker chaque photo qu’une seule fois
- #9 - Créer le système de tri : sort, rappord d'accessibilité, gérer l'accessibilité en permettant de sélectionner
les éléments au clavier dans le menu déroulant
- #10 - Vérifier le code avec un linter

## Cahier des charges
- Coding rules : fichiers séparés html/css/js, ES6, Eslint/VsCode, Naming, Comments 
- Responsive : pas besoin
- Page accueil
	- Liste photopgraphes; nom, slogan, localisation, prix/h, image mini
	- Vignette = lien vers page
- Page photographe
	- dynamique ?id=...
	- galerie media : images / videos (image mini dans la gallerie), titre, nb likes
	- bouton likes : bouton ++, nb likes total (somme)
	- tri media : popularité ou titre
	- lien media : lightbox
	- lightbox : X fermer, navigation (boutons ou flèches clavier), bouton contact
	- form contact : modal au dessus, noms/email/message, afficher le contenu dans la console
- Accessibilité : accessible aux utilisateurs malvoyants 
    - éléments HTML "sémantiques"
    - attributs ARIA
    - attribut “alt” : description textuelle titre photo ou nom du photographe
    - tests AChecker sans “known issue”
    - navigation par clavier, Event : KeyboardEvent.key ou KeyboardEvent.code
    - Utilisez un lecteur d'écran gratuit