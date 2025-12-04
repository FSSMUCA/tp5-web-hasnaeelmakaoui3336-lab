// EXERCICE 1
let x = "150";
let y = 150;
let z = true;

console.log("Type de x =", typeof x);
console.log("Type de y =", typeof y);
console.log("Type de z =", typeof z);
x = Number(x);
console.log("Nouveau type de x =", typeof x);
                       // EXERCICE 2
let prenom = "Sara";
let age = 22;
let phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(phrase);

age = 23;
let phrase2 = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(phrase2);
                       // EXERCICE 3
let nb = Number(prompt("Entrez un nombre : "));

if (nb < 0) {
    console.log("Nombre négatif");
} else {
    if (nb <= 10) {
        console.log("Petit");
    } else if (nb <= 50) {
        console.log("Moyen");
    } else if (nb <= 100) {
        console.log("Grand");
    } else {
        console.log("Très grand");
    }
}
                       // EXERCICE 4
let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "→ Five&Three");
    } else if (i % 3 === 0) {
        console.log(i, "→ Three");
    } else if (i % 5 === 0) {
        console.log(i, "→ Five");
    } else {
        console.log(i);
    }
}


                           // EXERCICE 5 

let n = Number(prompt("Entrez un nombre pour la table : "));
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

                            // EXERCICE 6 

let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sommePairs += i;
    } else {
        sommeImpairs += i;
    }
}

console.log("Somme des nombres pairs =", sommePairs);
console.log("Somme des nombres impairs =", sommeImpairs);


                        // EXERCICE 7 
function verifierMotDePasse(mdp) {
    if (mdp.length < 8) {
        return false;
    }
    if (!mdp.includes("@")) {
        return false;
    }
    return true;
}

let mot = prompt("Entrez un mot de passe : ");
if (verifierMotDePasse(mot)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

                        // EXERCICE 8 
function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise en % : "));

let totalFinal = totalAvecRemise(totalHT, remise);
console.log("Total final après remise =", totalFinal);


                            // EXERCICE 9 
function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

let nombreFactorielle = Number(prompt("Entrez un nombre pour la factorielle : "));
console.log("Factorielle =", factorielle(nombreFactorielle));


                              // EXERCICE 10 
function sommeIterative(n) {
    let resultat = 0;
    for (let i = 1; i <= n; i++) {
        resultat += i;
    }
    return resultat;
}

function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

let nSomme = Number(prompt("Entrez un nombre pour la somme : "));

console.log("Somme itérative =", sommeIterative(nSomme));
console.log("Somme récursive =", sommeRecursive(nSomme));
