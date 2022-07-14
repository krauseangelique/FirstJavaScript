/*
Create an Array
Declare and initialize an array called planets with 5 string values.
console.log each item in the array.
Also console.log the index in each iteration.
*/

// Variables declaration
const planets = ['Mars','Terre', 'Saturn', 'Netptune', 'Venus'];

// Developement
planets.forEach(
        (planet, index) => {

        // Display: Output
        console.log ((index + 1), planet);
        }
    );

// Second option
let cars = ['Tesla', 'Ferrari', 'Lamborghini'];

for (let i = 0; i < cars.length ; i++) {
    console.log(`${i+1} ${cars[i]}`);
}

