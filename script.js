console.log(`Coucou je s'appelle Groot.`);
function nav(){
    console.log("Je suis une fonction");
}
let firstArray = ["coucou", "bonjour", "hello"];
let langage = '';
if(langage == 'en'){
    document.write(firstArray[0]);
}

let javascriptCoach = "Lucas";
let firstname = "Lucas";

function isNotConnected() {
    firstname = "Arnaud";
    console.log(firstname);
}

function isConnected() {
    firstname = "Angélique";
    console.log(firstname);
}
 isNotConnected(); // Output Arnaud
 isConnected(); // Output Angélique

 let isAlwaysConnected = Boolean;

 function connected() {
    firstname = "Angélique";
    if (isAlwaysConnected == true) {
        alert(`Welcome back ${firstname}`);
    } else {
        alert(`${firstname} you are not connect ! `);
    }
 }
 console.log(firstname);