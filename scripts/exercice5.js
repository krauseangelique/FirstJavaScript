/*
    5.How many letters?
let furnitures = ['Table', 'Chairs','Couch'];
For each item in this array console.log the letters in each item.
    
*/

// Variables declaration
let furnitures = ['Table', 'Chairs','Couch'];

// Display of results: Output
console.log(furnitures);

// Data processing Developement

furnitures.forEach((furniture) => {

   let newArrayOfFurnitures = new String(furniture);

   // Display of results: Output
    console.log(newArrayOfFurnitures.split(''));
}); 





   




