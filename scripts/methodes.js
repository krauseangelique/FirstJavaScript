/************************
 *  METHODES EN JS
 */

 let fruits = ["Pomme", "Orange", "Fraise"];
/******
 * findIndex
 */


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

