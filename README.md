# SnowtricksAngular

This repository contain the source code of the Openclassrooms project "Snowtricks".

## Développement
Lancer `ng serve` pour un serveur de développement. Ouvrez l'url : `http://localhost:4200/`.
Le serveur rechargera automatiquement TOUT changement.

## Production

Lancer `ng build` pour préparer la mise en production.
Les fichiers compilés seront stockés dans le dossier `dist/`.
Ajouter le flag `-prod` pour compiler des fichiers pour la production.

## Tests

Lancer `ng test` pour exécuter les tests via [Karma](https://karma-runner.github.io).

## End-to-End tests

Lancer `ng e2e` pour exécuter les tests "end-to-end" via [Protractor](http://www.protractortest.org/).
Soyez assuré d'avoir lancer `ng serve` avant de lancer ces tests.

Contexte
--------------

Jimmy Sweat est un entrepreneur ambitieux. Son objectif est d'en faire un outil pour apprendre les figures (tricks) du snowboard, de permettre la vulgarisation du snowboard auprès du plus grand nombre. Il souhaite capitaliser sur du contenu apporté par les internautes afin d’acquérir une base de données riche et suscitant l’intérêt des internautes qui passerait par le site web. Par la suite, Jimmy souhaite développer un business de mise en relation avec les marques de snowboard grâce au trafic que le contenu aura généré.

Pour ce projet, nous allons nous concentrer sur la création technique du site pour Jimmy.

Description
--------------

Jimmy vous a contacté pour que vous lui développiez le prochain super site communautaire qui fera fureur.

Voici un grand angle de l’ensemble des fonctionnalités de l’application web :

un annuaire des figures de snowboard (vous trouverez une [liste des figures](https://fr.wikipedia.org/wiki/Snowboard_freestyle#Les_types_de_tricks) sur Wikipédia pour vous aider - inutile de toutes les inclure, dix suffiront. Le reste sera saisis par les internautes) ;
consulter la page d’une figure ;
un espace de discussion commun à toutes les figures.
Toutes les pages sont visibles.

Voyons maintenant plus en détail ce qui devra être visible sur le site web. Voici la liste de toutes les pages qu’il vous faudra créer :

la page d’accueil où figurera la liste des figures de snowboard ;
la page de création de figure de snowboard ;
la page de modification de figure de snowboard ;
la page de présentation d’une figure (contenant l’espace de discussion commun autour d’une figure).
L’ensemble des spécifications détaillées pour les pages à développer sont accessibles ici : [Spécifications détaillées](https://docs.google.com/document/d/1rN0zCJnxFBA2RFnCfQU5jqzTf5vySVDmcggf3ues8BI/edit).

_**Nota Bene**_

Il faut que les URLs de page permettent une compréhension rapide de ce que la page représente et que le référencement naturel soit facilité.

L’utilisation de bundles tierces est autorisée.

Le design du site web est laissé complètement libre. Néanmoins il faudra que le site soit consultable aussi bien sur un ordinateur que sur mobile (téléphone mobile, tablette, phablette…).

En premier lieu il vous faudra écrire l’ensemble des issues/tickets afin de découper votre travail méthodiquement et vous assurer que l’ensemble du besoin client soit bien compris avec votre mentor. Les tickets/issues seront écrits dans un repository Github que vous aurez créé au préalable.

L’ensemble des figures de snowboard doivent être présentes à l’initialisation de l’application web. Vous créerez une commande Symfony permettant de parser un fichier YAML que vous aurez créé avec l’ensemble de ces figures. Vous indiquerez dans le fichier README comment utiliser la commande.

Usage
-------

