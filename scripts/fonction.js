function helloWhenConnected(name) {
    let userName = name;
    console.log(`Salut ${userName}`); // Concaténation avec des backticks
    confirm(`Bonjour ${userName}`);
}


helloWhenConnected("Arnaud");

if(confirm() === true) {
    console.log("bonsoir");
}else {
    console.log("au revoir");
}

// fonction ppppppppour la cluculatrice
function multiply(a,b){
    return a * b;
}
console.log(multiply(2,4));


let arrayOfDiallo = ["Back", "Abdourahmane", "Diallo"];
arrayOfDiallo.push

function familyDialloArray(arr) {
    let familyNames = [arr];
    console.log(familyNames);
}
// Call to function
familyDialloArray(arrayOfDiallo);

document.getElementById("btnLinkTop");


// fonction 3 param
function generateRandom() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
}

// Call to function
// generateRandom();
document.getElementById("randomBg").addEventListener("click", generateRandom);

// callback function
let siriusTeamArray = ["Jeremy", "Ganaëlle", "Lucas"];

siriusTeamArray.forEach((element) => {

    console.log(element);
    
})

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus', 'September', 'October', 'November', 'December'];

let randomNumber = Math.floor(Math.random() * months.length);
console.log(months[randomNumber]);

var x = parseInt(prompt("Enter a Value", "0"), 10);
var y = parseInt(prompt("Enter a Value", "0"), 10);

var x = parseFloat(prompt("Enter a Value", "0"));
var y = parseFloat(prompt("Enter a Value", "0"));

function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
      return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI ;
  }
  
  console.log(circumference('4.567abcdefgh'));
  // expected output: 28.695307297889173
  
  console.log(circumference('abcdefgh'));
  // expected output: 0
  let string = "2.356";
  let money = parseFloat(string);
  console.log(money);
/*Copy to Clipboard
Paramètres
string
Une chaîne de caractères la valeur qu'on souhaite analyser et transformer en un nombre flottant.

Valeur de retour
Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet pas d'obtenir un nombre, ce sera la valeur NaN qui sera renvoyée.

Description
*/



   

