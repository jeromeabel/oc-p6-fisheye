# oc-p6-fisheye

## TODO
- [ ] #1 - Prendre en main le html, css, js : inspecteur, console.log
- [ ] #2 - Importer les datas : fetch json
- [ ] #3 - Intégrer la page d'accueil : accessibilité DOM/HTML/CSS, étendre photographerFactory
- [ ] #4 - Gérer la navigation entre la page accueil et la page photographe : aria-label, gérer le focus, rapport d'accessibilité de la page d'accueil
- [ ] #5 - Afficher le contenu statique de la page photographe : HTML/CSS, photographerFactory, factory pour les media (image ou vidéo)
- [ ] #6 - Créer la modale de contact : gestion du formulaire, style, focus, role, aria-label, pas de tests (simple console.log)
- [ ] #7 - Gérer les médias de la Lightbox : lorsque vous cliquez sur une photographie, faire défiler les autres photographies, se ferme au clic sur le bouton de fermeture, aria-label et le rôle de votre LightBox
- [ ] #8 - Afficher et gérer les likes : gérer le nombre de likes total depuis photographerFactory, L’utilisateur ne doit pouvoir liker chaque photo qu’une seule fois
- [ ] #9 - Créer le système de tri : sort, rappord d'accessibilité, gérer l'accessibilité en permettant de sélectionner
les éléments au clavier dans le menu déroulant
- [ ] #10 - Vérifier le code avec un linter

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
	- dynamique
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

## Ressources

### projet
- Étapes clés 
- Notes - Réunion client
- Maquettes Figma
- Photos
- json
- Code Github

### cours
- https://openclassrooms.com/fr/courses/6691346-concevez-un-contenu-web-accessible
- https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css
- https://openclassrooms.com/fr/courses/7133336-utilisez-des-design-patterns-en-javascript

### articles 
- extension : wave evaluation tool + Lighthouse
- attribut tabindex ?
- factory pattern ( OOP "class" )
- GRID
    - https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
- SEARCHPARAMS
    - https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams
- ACCESSIBILITY : 
    - https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965660-allez-plus-loin-avec-l-accessibilite
    - https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6964639-guidez-vos-utilisateurs-sur-les-contenus-multimedia
    - https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965649-rendez-vos-modales-et-carrousels-accessibles
    - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders
    - https://www.lalutineduweb.fr/alternatives-textuelles-attributs-aria/
- FOCUS MODAL ADA COMPLIANT : https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
- SORT : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- FETCH : https://javascript.info/fetch, https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
- JSON : https://stackoverflow.com/questions/51859358/how-to-read-json-file-with-fetch-in-javascript
- SORT : https://www.zendevs.xyz/comment-trier-un-tableau-en-javascript-avec-la-methode-sort/
- FACTORY PATTERNS
    - https://www.youtube.com/watch?v=3HU5l3P6KDc
    - https://leblogducodeur.fr/factory-fonction-javascript/
- DESIGN PATTERNS
    - https://leblogducodeur.fr/factory-fonction-javascript/
    - https://www.dofactory.com/javascript/design-patterns/factory-method
    - https://www.patterns.dev/posts/classic-design-patterns/
    - https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15?gi=b5cecd9fc81
    - https://codingcompiler.com/javascript-design-patterns/
- LINTER : https://www.synbioz

## Outils d'accessibilitéstratégie de tests d'accessibilité holistique
- 
- Extensions Chrome:
	- Wave Evaluation Tool (vérificateur d'accessibilité automatisé) ;
	- aXe (vérificateur d'accessibilité automatisé) ;
	- HeadingsMap.
- TPG Colour Contrast Analyser + Eye Dropper
- Lecteur d'écran NVDA (utilisateurs de PC uniquement), TalkBack (Android)

.com/blog/tech/un-code-js-impeccable-grace-a-eslint

## Compétences
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns
- Ecrire du code JavaScript maintenable