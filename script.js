// camelCase
// Declare variables
const firstname     = "Lucas";
const lastname      = "Ielli";
const myFirstname   = "Angélique";
const myLastname    = "KRAUSE";

let counter         = "29"; // string
let counted         = 29; // number

let age             = "29 ans";
let myAge           = "56 ans";
let job             = "coach chez Sirius !";
let myJob           = "apprenante chez Sirius !";

// Boolean
let isConnected = Boolean(null); // assigment to null for a boolean return false let isConnected = false by default




// typeof Number('1') === 'number'; // Number try to convert argument to number

// Developement

    /*! into the Console
    ---------------
        typeof arrayTest
        'undefined'
    */


// Display: Output
console.log(typeof counter); // string
console.log(typeof counted); // number

console.log(`Je m'appelle ${firstname}, j'ai ${age} et je suis ${job}`);
console.log(`Je m'appelle ${myFirstname}, j'ai ${myAge} et je suis ${myJob}`);
console.log("je s`appelle " + firstname ); // old method
console.log(typeof isConnected); // null return false
console.log(isConnected);

