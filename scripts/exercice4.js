/*
    4.
    Empty Array
    Create an empty Array.
    console.log this empty Array and keep it during all this exercise.
    Add some data in it, the type you want, the theme you want.
    Copy your Array
    console.log this new Array 
*/

// Variables declaration
let emptyArray = [];
console.log(emptyArray);
// Data processing Developement
let pushDataIntoEmptyArray = emptyArray;
pushDataIntoEmptyArray.push('chickens', 'cats', 'dogs');

let copyArrayPushData = pushDataIntoEmptyArray.slice();




// Display of results: Output

console.log(pushDataIntoEmptyArray);
console.log('new full array: ' + pushDataIntoEmptyArray);
console.log(copyArrayPushData);


