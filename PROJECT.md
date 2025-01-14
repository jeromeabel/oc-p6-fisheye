# PROJECT

## Contexte
- Développeur junior chez Techasite, une société de conseil spécialisée dans le développement de sites web et d'applications mobiles.
- Client FishEye : site web de photographes freelances avec photos, tirages, contact
- Mission : moderniser le site web en site dynamique

## Compétences
- Assurer l'accessibilité d'un site web
- Gérer les évènements d'un site avec JavaScript
- Développer une application web modulaire avec des design patterns
- Ecrire du code JavaScript maintenable


## Cahier des charges
- Coding rules : fichiers séparés html/css/js, ES6, Eslint/VsCode, Naming, Comments 
- Responsive : pas besoin
- Page accueil
	- Liste photographes; nom, slogan, localisation, prix/h, image mini
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


## 🗹 Done
- [x] Copie des fichiers media et renommage des dossiers Id
- [x] Generate thumbnails for photographers
- [x] Clean repository from scratch (sass, js), add structure
- [x] Home : header
- [x] Fetch : Get data from json
- [x] Home : main, display data, links, templates card
- [x] Page : template Header, ?id=
- [x] Page : template Media, MediaFactory
- [x] Page : corrections noms d'images (error 404)
- [x] Page - slideshow, no-scroll, aria-hidden, role dialog, handleFocus (tab), navigation enter keyboard(open), esc, arrows
- [x] Page - slideshow : focus, trapFocus (tabindex -1)
- [x] Page - title : specific first
- [x] Home : Test accessibilité (axe, headinmaps, wave, lighthouse, achecker): 
	- wcag : heading, lang, alt img, alt logo+link, section vs div
	- css : reset, font-size: px + em, 
	- card : flex, img fit, font-size, gap, ...
- [x] Page - contact : aria-invalid (pas besoin), style, handleFocus (tab), role, aria-label, console
- [x] Page - media card likes : +1
- [x] Page - likes : somme total
- [x] Page - tri media : popularité / titre / date, menu clavier/focus
- [x] Rapports d'accessibilité : achecker.acheck, Lighthouse, Wave, Axe, HeadingsMap, Kontrast, validator
- [x] Linter : npm init, npm i -D eslint, scripts eslint **/*.js, npm init @eslint/config
- [x] Tests avec un lecteur d'écran 
- [ ] Documentation, comments, slide

## Guidelines
- #1 - Prendre en main le html, css, js : inspecteur, console.log
- #2 - Importer les datas : fetch json
- #3 - Intégrer la page d'accueil : accessibilité DOM/HTML/CSS, étendre photographerFactory
- #4 - Gérer la navigation entre la page accueil et la page photographe : aria-label, gérer le focus, rapport d'accessibilité de la page d'accueil
- #5 - Afficher le contenu statique de la page photographe : HTML/CSS, photographerFactory, factory pour les media (image ou vidéo)
- #6 - Créer la modale de contact : gestion du formulaire, style, focus, role, aria-label, pas de tests (simple console.log) : aria-hidden="true" / false
- #7 - Gérer les médias de la Lightbox : lorsque vous cliquez sur une photographie, faire défiler les autres photographies, se ferme au clic sur le bouton de fermeture, aria-label et le rôle de votre LightBox
- #8 - Afficher et gérer les likes : gérer le nombre de likes total depuis photographerFactory, L’utilisateur ne doit pouvoir liker chaque photo qu’une seule fois
- #9 - Créer le système de tri : sort, rapport d'accessibilité, gérer l'accessibilité en permettant de sélectionner les éléments au clavier dans le menu déroulant
- #10 - Vérifier le code avec un linter

## Notes

### ?
? video sous-titre ou pas d'audio ?
? a:link, visited ?
?? a aria-current="page" aria-label(significations des liens)
? quand on trie le compteur repars à zéro?

### Difficultés
- confusion factory pattern : class extends (héritage) vs function factory ?
- data !! images
- reprendre le code ou tout refaire 
- Template literal strings, create DOM nodes ?
- responsabilités ! accès à tout
- création éléments, ordre, querySelector undefined...
- ordre de création innertHTML, appendChilde...
- this, contextes
- patterns

### Acquis
- fetch, async
- destructuring
- factory method
- ARIA

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

### ARIA
Header role=banner, svg role=img, footer role=contentinfo, arial-label=footer navigation, nav role="navigation", 
form role=search, menus imbriquées (menubar, menuitem)
a aria-current=”page” aria-label(significations des liens)
aria-haspopup, aria-expanded
menu imbriqués  roles tree, tabindex et treeitem : https://www.w3.org/WAI/GL/wiki/Using_ARIA_trees
menu burger aria-controls= id
nav aria-label="breadcrumb"> ol li a <li class="breadcrumb-item active" aria-current="page">Data</li>

### articles 
- extension : wave evaluation tool + Lighthouse
- attribut tabindex ?
- factory pattern ( OOP "class" )
- GRID
    - https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
- SEARCHPARAMS
    - https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams
- ACCESSIBILITY :
    - https://dev.to/robdodson/managing-focus-64l
    - https://web.dev/a11y-for-teams/
    - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders
    - CHECK LIST : https://www.a11yproject.com/checklist/
    - Pa11y aims to improve the accessibility of the web through better tooling and automation : https://github.com/pa11y
    - balises sémantiques : https://fr.semrush.com/blog/balises-structurelles-html-semantique/
    - https://www.w3.org/Translations/WCAG20-fr/
    - Rôles ARIA : https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
    - https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6964639-guidez-vos-utilisateurs-sur-les-contenus-multimedia
    - https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css/6965649-rendez-vos-modales-et-carrousels-accessibles
    - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders
    - https://www.lalutineduweb.fr/alternatives-textuelles-attributs-aria/
    - https://www.w3.org/WAI/ARIA/apg/ ARIA Authoring Practices Guide (APG) Home, https://www.w3.org/TR/wai-aria-1.1/
    - communautés a11y et les sites tels que WebAIM
    - MODAL : https://codepen.io/nicolaspatschkowski/pen/dyYjVGj
    - CARROUSEL : https://codepen.io/nicolaspatschkowski/pen/wvKxrov
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
- LINTER : https://www.synbioz.com/blog/tech/un-code-js-impeccable-grace-a-eslint
    - Guide+de+test+d'accessibilité+des+WCAG.pdf
    - https://validator.w3.org/nu/

## Outils d'accessibilité
- Stratégie de tests d'accessibilité holistique
- Extensions Chrome:
	- Wave Evaluation Tool (vérificateur d'accessibilité automatisé) ;
	- aXe (vérificateur d'accessibilité automatisé) ;
	- HeadingsMap.
	- Color Contrast Analyzer
    - Lighthouse
- TPG Colour Contrast Analyser (Mac, Win?)+ Eye Dropper : Kontrast (KDE)
- Lecteur écran ORCA (Linux)
- Lecteur d'écran TalkBack (Android)
- https://validator.w3.org/nu/ + WCAG Parsing Bookmarklet : https://cdpn.io/pen/debug/VRZdGJ
- Guide+de+test+d'accessibilité+des+WCAG.pdf
- https://google.github.io/styleguide/htmlcssguide.html
- https://achecker.achecks.ca/checker/index.php
- https://www.a11yproject.com/checklist/
- https://www.w3.org/WAI/design-develop/
- https://www.w3.org/WAI/tutorials/images/functional/
