/* LES COMPARATEURS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les comparateurs');

// ------ TODO 1 ------ 
// 1. Créer une variable neighbourAge qui contient l'âge de votre voisin

var neighbourAge = 20;


// 2. Créer une variable myAge qui contient votre âge

var myAge = 30;


// 3. Comparez les variables neighbourAge et monAge en utilisant des comparateurs (<, <=, >, >=, ===, !== ...)
// puis affichez le résultat des comparaisons dans la console avec la méthode "console.log".
// <, >, <=, >=, ==, ===, !==

console.log(myAge > neighbourAge);
console.log(myAge < neighbourAge);
console.log(myAge >= neighbourAge);
console.log(myAge <= neighbourAge);
console.log(myAge == neighbourAge);
console.log(myAge === neighbourAge);
console.log(myAge !== neighbourAge);


console.log(" ------ TODO 2 ------ ");
// ------ TODO 2 ------ 
// 1. Créer une fonction showGreaterNumber qui prend en paramètre deux nombres et
// qui affiche le plus grand des deux dans la console.

function showGreaterNumber(int1,int2) {
    if (int1 > int2) {
        console.log(int1);
    } else {
        console.log(int2);
    }
}


// 2. L'exécuter avec les paramètres de votre choix.

showGreaterNumber(42,3);


// ------ TODO 3 ------ 
// 1. Créer une fonction isBetween1000And3000 qui prend en paramètre une variable et
// qui renvoie un booléen indiquant si la variable est un nombre compris entre 1000 et 3000.




// 2. L'exécuter avec le paramètre de votre choix.