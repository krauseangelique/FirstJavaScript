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
    const r1 = Math.floor(Math.random() * 256);
    const g1 = Math.floor(Math.random() * 256);
    const b1 = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${r1}, ${g1}, ${b1})`;
}

// Call to function
// generateRandom();
document.getElementById("randomBg").addEventListener("click", generateRandom);




   

