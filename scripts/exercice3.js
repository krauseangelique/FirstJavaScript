/*
Manipulate data types
Declare and initialize an array called someDataTypes.
This array must have 4 differents data types (NOT Objects).
Type and display in your console the typeof for each iteration.
Display in your console the index of each data in your array
*/

// Variables declaration
const someDataTypes = ["chaine", true, 9, undefined];

// Developement
/*
const a = 9;

console.log(typeof a); // number
console.log(typeof '9'); // string
console.log(typeof false); // boolean
*/
someDataTypes.forEach(dataType => {
  console.log(typeof dataType);
})

// Display: Output
   

/*for (const [index, value] of ["chaine", true, 9, undefined].entries()) {
    console.log(index, value);
  }
  Not find !!!
*/
