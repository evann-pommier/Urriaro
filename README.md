# Site vitrine Urriaro

## Déposer les fichiers sur OVH
1. Espace client OVH > Hébergements > votre hébergement > onglet « FTP - SSH ».
2. Connectez-vous avec FileZilla (ou le gestionnaire de fichiers OVH).
3. Déposez le **contenu** de ce dossier dans le dossier `www/` : `index.html`, `style.css`, `script.js`, `assets/`.
4. Ouvrez votre domaine : la page s’affiche (comptez quelques minutes si le domaine vient d’être rattaché).

## Modifier les textes
- Tous les textes sont dans `index.html` (ouvrir avec un éditeur de texte, modifier entre les balises, enregistrer en UTF-8).
- Couleurs et polices : variables en haut de `style.css` (`:root`).
- Mentions légales : remplacer les `[à compléter]` en bas de `index.html`.

## À remplacer
- `assets/logo-urriaro.png` : logo **provisoire** (recadré depuis la carte de visite, fond non transparent). Remplacez-le par le logo transparent (même nom, ou ajustez `index.html`). Idem `assets/favicon.png`.
- Polices Inter 400 et Montserrat 600/700 (sous-ensemble latin, licence OFL) déjà dans `assets/fonts/`.
