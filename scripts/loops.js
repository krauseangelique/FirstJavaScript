/*
for (let pas = 0; pas < 5; pas++) {
  // Ceci sera exécuté 5 fois
  // À chaque éxécution, la variable "pas" augmentera de 1
  // Lorsque'elle sera arrivée à 5, le boucle se terminera.
  console.log('Faire ' + pas + ' pas vers l\'est');
}

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

*/
let arrayString = ["1","2","3","4"];
let newArrayNumber = [];

for (let index = 0; index < arrayString.length; index++) {
    const element = arrayString[index];
    parseInt(index);
    
   console.log(index);
    
}


let oldArray=['1','5','8','9'];
let newArray=[];

console.log(oldArray);
console.log('-'.repeat(30));

oldArray.forEach(item =>{
  convert(parseInt(item));
})

function convert(num){
  newArray.push(num);
}

console.log(newArray);
document.write("\12 XX"); // expected output XX BUT in a special font for Qnumbers in LATIN CARACTERS

let numbers  = ["5", "8", "9", "11", "1", "6"];
let newTab = numbers.map(str => parseInt(str));

console.log(newTab); // expected out:  [5, 8, 9, 11, 1, 6]
console.log(typeof newTab[0]); // expected output: number
