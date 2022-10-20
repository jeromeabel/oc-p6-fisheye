
## Ressources

## projet
- Étapes clés 
- Notes - Réunion client
- Maquettes Figma
- Photos
- json
- Code Github

## cours
- https://openclassrooms.com/fr/courses/6691346-concevez-un-contenu-web-accessible
- https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css
- https://openclassrooms.com/fr/courses/7133336-utilisez-des-design-patterns-en-javascript

## ARIA
Header role=banner, svg role=img, footer role=contentinfo, arial-label=footer navigation, nav role="navigation", 
form role=search, menus imbriquées (menubar, menuitem)
a aria-current=”page” aria-label(significations des liens)
aria-haspopup, aria-expanded
menu imbriqués  roles tree, tabindex et treeitem : https://www.w3.org/WAI/GL/wiki/Using_ARIA_trees
menu burger aria-controls= id
nav aria-label="breadcrumb"> ol li a <li class="breadcrumb-item active" aria-current="page">Data</li>

## articles 
- extension : wave evaluation tool + Lighthouse
- attribut tabindex ?
- factory pattern ( OOP "class" )
- GRID
    - https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout
- SEARCHPARAMS
    - https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams
- ACCESSIBILITY :

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders
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

## Outils d'accessibilité
- Stratégie de tests d'accessibilité holistique
- Extensions Chrome:
	- Wave Evaluation Tool (vérificateur d'accessibilité automatisé) ;
	- aXe (vérificateur d'accessibilité automatisé) ;
	- HeadingsMap.
	- Color Contrast Analyzer ??
- TPG Colour Contrast Analyser (Mac, Win?)+ Eye Dropper : Kontrast (KDE)
- Lecteur écran ORCA (Linux)
- Lecteur d'écran NVDA (utilisateurs de PC uniquement) : https://blog.atalan.fr/tester-accessibilite-web-pdf-lecteur-ecran-nvda/
- Lecteur d'écran TalkBack (Android)
- https://validator.w3.org/nu/ + WCAG Parsing Bookmarklet : https://cdpn.io/pen/debug/VRZdGJ
- Guide+de+test+d'accessibilité+des+WCAG.pdf

