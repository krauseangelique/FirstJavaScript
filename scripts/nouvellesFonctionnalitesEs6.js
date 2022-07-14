/* Paramètres par défaut dans ES6

Avant l’arrivée de ES2015, quand on voulait spécifier un paramètre par défaut dans une fonction, il fallait le faire dans le corps de la fonction comme ça :
*/

function greetHuman(name) {
    name = name || 'human';
    return 'Hello ' + name + ', we come in peace';
}

greetHuman();

greetHuman('Siddhy');

// Tout était OK jusqu’à ce que la valeur soit 0, parce que 0 est false en JavaScript

/*Voici à quoi ressemblerait le code de l’ES6 si vous combiniez les fonctions fléchées, le modèle littéral et paramètres par défaut :
*/

const greetHuman = (name = 'human') => `Hello ${name}, we come in peace`;

greetHuman('Siddhy'); 'Hello Siddhy, we come in peace'

greetHuman(); 'Hello human, we come in peace'

/*L’utilisation des fonctions fléchées dans ES6 nous permet d’arrêter d’utiliser that = this ou self = ceci ou _this = this ou .bind(this).

En bon vieux code ES5 ça pourrait donner quelque chose comme:
*/

var _this = this

$('.btn').click(function(event){
  _this.send()
})
/*Et en ES6, sans le _this = this : */