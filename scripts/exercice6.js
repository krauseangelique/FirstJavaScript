/*
    6.Which one is a number?
let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];
Delete data types which are not numbers.
    
*/

// Variables declaration
const words = ['spray', 'limit', 5, 'exuberant', 'destruction', 3.2];

let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];

// Data processing Developement

words.forEach(
    (word) => { 
        
        if(!isNaN(word)){

            //Display: Output
            console.log(word);
        }
    }
);


// Display of results: Output

// Second option
function values(v1) {
  return v1.filter(x => typeof x === "number");
}
console.log(values(values1));
console.log(values(values2));
console.log(values(values3));




