# oc-p6-fisheye

## Compétences
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns
- Ecrire du code JavaScript maintenable

## Contexte
- Entreprise FishEye : Site web de photographes freelances : photos, tirages, contact
- Mission : Moderniser le site web : site dynamique

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
