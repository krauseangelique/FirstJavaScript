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