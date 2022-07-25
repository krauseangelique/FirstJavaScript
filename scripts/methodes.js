/************************
 *  METHODES EN JS
 */

/******
 * slice : copie SUPERFICIELLE d'une portion du tableau d'origine, portion définie par 
 * un indice de début et un indice de fin (exclus) [ ,  [
 *  ! le tableau d'origine n'est pas modifié
 */ 
 let fruits     = ["Pomme", "Orange", "Fraise"];
 let copyFruits = fruits.slice();
 console.log(copyFruits);
 

 const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 console.log(animals.slice(2)); // expected output (3) ['camel', 'duck', 'elephant']

/****
 * splice : permet de MODIFIER les éléments d'un tableau
 */
 var mesPoissons  = ["scalaire", "clown", "mandarin", "chirurgien"];

 // supprime 0 élément à partir de l'index 2, et insère "tambour"
 var enleves = mesPoissons.splice(2, 0, "tambour");
 // mesPoissons est ["scalaire", "clown", "tambour", "mandarin", "chirurgien"]
 // enleves est [], aucun élément supprimé
 
 // supprime 1 élément à partir de l'index 3
 enleves = mesPoissons.splice(3, 1);
 // mesPoissons est ["scalaire", "clown", "tambour", "chirurgien"]
 // enleves est ["mandarin"]
 
 // supprime 1 élément à partir de l'index 2, et insère "trompette"
 enleves = mesPoissons.splice(2, 1, "trompette");
 // mesPoissons est ["scalaire", "clown", "trompette", "chirurgien"]
 // enleves est ["tambour"]
 
 // supprime 2 éléments à partir de l'index 0, et insère "perroquet", "anémone" et"bleu"
 enleves = mesPoissons.splice(0, 2, "perroquet", "anémone", "bleu");
 // mesPoissons est ["perroquet", "anémone", "bleu", "trompette", "chirurgien"]
 // enleves est ["scalaire", "clown"]
 
 // supprime 2 éléments à partir de l'indice 2
 enleves = mesPoissons.splice(mesPoissons.length - 3, 2);
 // mesPoissons est ["perroquet", "anémone", "chirurgien"]
 // enleves est ["bleu", "trompette"]
 
 var mesPoissons = ["perroquet", "anémone", "bleu", "trompette", "chirurgien"];
 // on retire trois éléments à partir de l'indice 2
 enleves = mesPoissons.splice(2);
 // mesPoissons vaut ["perroquet", "anémone"]
 // enleves vaut ["bleu", "trompette", "chirurgien"]
 
 var mesAnimaux = ["cheval", "chien", "chat", "dauphin"];
 enleves = mesAnimaux.splice(-2, 1);
 
 // mesAnimaux vaut ["cheval", "chien", "dauphin"]
 // enleves vaut ["chat"]


/* ****
 * findIndex
 */
let mesfruits     = ["Pomme", "Orange", "Fraise"];
// méthode findIndex qui permet de trouver une correspondance entre un elmt et son index dans le tableau
const index = mesfruits.findIndex(element => element === 'Pomme');
console.log(index); // 0
console.log(mesfruits[index]); // Pomme

/******
 * filter
 */
let filteredArrayFruits = fruits.filter((citrus) => citrus === "Orange");
console.log(filteredArrayFruits);
/*
Array(1)
0: "Orange"
length: 1
[[Prototype]]: Array(0)
*/

/******
 * reduce
 */

/******
 * map à utiliser avec des tableaux de prix transactions taille de vêtements etc. donc avec des numbers
 */
let numberArray = [1, 2, 3, 4];
let byTwoArray = numberArray.map((element) => element +1);
console.log(byTwoArray);

let arrayOfDiallo = ['gt', 'o' , 'p'];
let arrayOfAlpha = ['r','t','s'];
const mergeArrays = [...arrayOfDiallo, ...arrayOfAlpha];
console.log(mergeArrays);

/******
 * sort
 */
let sortArray = [-3, -30, 30, 1, 1000, 3];
console.log(sortArray.sort()); // expected output :(6) [-3, -30, 1, 1000, 3, 30] -- règle alphanumérique

//Si on veut trier un tableau de nombre, il convient d’utiliser la méthode suivante :

let goedSortArray = [-3, -30, 30, 1, 1000, 3];
console.log(sortArray.sort((a, b) => a - b)); // expected output:  [-30, -3, 1, 3, 30, 1000]

