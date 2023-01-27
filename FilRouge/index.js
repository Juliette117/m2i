let age = 31;
let prenom = "Juliette";
let futurMetier = "développeuse web"
console.log( "Je m'appelle "+prenom+", j'ai "+age+" ans"+ " et je veux être "+futurMetier+".");
console.log(`Mon prénom est composé de ${prenom.length} caractères.`);
console.log(`${futurMetier.substring(0,6)}${prenom.substring(5,8).toUpperCase()}`);
console.log(prenom.split(''));
const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
console.log(fruits);
console.log(fruits[0]);
fruits.unshift("ananas");
fruits.push("banane");
console.log(fruits);

