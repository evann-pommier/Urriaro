# Site vitrine Urriaro

Site statique d'une seule page, en français, pour **Urriaro – Optimiser l'existant**.
HTML, CSS et JavaScript simples : aucun framework, aucune étape de build, aucun cookie, aucun service tiers.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Tous les textes et la structure de la page |
| `style.css` | Charte graphique (couleurs et polices en variables, en haut du fichier) |
| `script.js` | Menu mobile, schéma des 5 axes, bouton « copier l'adresse », apparition au scroll |
| `assets/logo-urriaro.png` | Logo (**provisoire**, voir « À compléter ») |
| `assets/favicon.png` | Icône de l'onglet (**provisoire**) |
| `assets/fonts/` | Montserrat (600, 700) et Inter (400), auto-hébergées, licence OFL |
| `.nojekyll` | Utile uniquement pour GitHub Pages, sans effet ailleurs |

## Voir le site en local
Double-cliquez sur `index.html` : il s'ouvre dans le navigateur, sans serveur.

## Modifier le site
- **Textes** : ouvrez `index.html` dans un éditeur de texte (VS Code, Notepad++), modifiez le texte entre les balises, enregistrez en UTF-8.
- **Couleurs et polices** : variables `:root` en haut de `style.css`. Respectez la charte : cyan = donnée mesurée, vert = gain, orange = attention.
- **Schéma des 5 axes** : chaque branche est un bloc `<g class="node" ...>` dans `index.html`. Le texte du détail est dans ses attributs `data-t` (titre), `data-s` (sous-titre) et `data-d` (description).
- **Cas concret** : ne pas ajouter d'économies ni de montants en euros. Les chiffres du salon de thé sont des mesures, les causes restent des hypothèses.

## Règles de contenu
- Ne jamais écrire « audit énergétique » (prestation réglementée) : utiliser « analyse », « diagnostic terrain », « accompagnement ».
- Ne promettre ni aide, ni éligibilité, ni économies garanties.
- La signature est « Optimiser l'existant » ; « Mesurer | Voir | Optimiser | Économiser » ne décrit que la méthode.
- Elios est « en cours de développement » : ne pas le présenter comme disponible.

## Publier sur OVH (hébergement mutualisé)
1. Espace client OVH > *Web Cloud > Hébergements* > votre hébergement > onglet *FTP - SSH* : relevez le serveur et l'identifiant, définissez le mot de passe si besoin.
2. Connectez-vous avec FileZilla.
3. Envoyez le **contenu** du dossier (pas le dossier lui-même) dans `www/` : `index.html`, `style.css`, `script.js`, `assets/`.
4. Onglet *Multisite* : vérifiez que le domaine pointe vers `www`.
5. Testez le domaine en navigation privée. Pour une mise à jour, écrasez le fichier modifié puis faites Ctrl + F5.

## Publier avec GitHub Pages (page de démonstration)
1. Envoyez ces fichiers à la racine du dépôt (`index.html` doit être à la racine).
2. Sur GitHub : *Settings > Pages > Build and deployment > Source : Deploy from a branch*, branche `main`, dossier `/ (root)`, puis *Save*.
3. Après une à deux minutes, le site est disponible à `https://NOM-UTILISATEUR.github.io/NOM-DU-DEPOT/`.
4. Attention : un dépôt public rend tout le contenu lisible par tous, et GitHub Pages gratuit exige un dépôt public.

## À compléter avant la mise en ligne définitive
- [ ] Logo transparent : remplacer `assets/logo-urriaro.png` et `assets/favicon.png`.
- [ ] Mentions légales : remplacer les `[à compléter]` en bas de `index.html` (raison sociale, forme juridique, adresse, SIREN, directeur de publication) et vérifier l'adresse d'OVH.
- [ ] Relire les textes et tester sur mobile (360, 768, 1024, 1440 px).
- [ ] Tester le bouton « Écrire à Urriaro » sur un ordinateur ou un téléphone avec messagerie configurée.
