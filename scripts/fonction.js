function helloWhenConnected(name) {
    let userName = nime;
    console.log(`Salut ${userName}`); // Concaténation avec des backticks
    confirm(`Bonjour ${userName}`);
}

helloWhenConnected("Arnaud");

if(confirm() === true) {
    console.log("bonsoir");
}else {
    console.log("au revoir");
}