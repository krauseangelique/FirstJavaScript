// Variables declaration
const chat = {
    name: "Lucky",
    age: 4,
    weight: "6",
    color: "Tigré Gris"
};

const userRegister = {
    username: "admin",
    email: "admin@example.be",
    password: "coucou123",
    confirmPassword: "coucou123"
}



// Data processing Developement



// Display of results: Output
console.log(chat);
console.log(chat['name']);// ca fonctionne MAIS ne le faites pas car c'est la syntaxe pour les tableaux
console.log(`La couleur du chat est`, chat['color']); // La couleur du chat est Tigré Gris
console.log(chat.age);
console.log(`Le nom du chat est ${chat.name}`);

