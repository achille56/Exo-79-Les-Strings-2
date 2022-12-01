let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

// partie 1
let indexPomme2 = document.getElementById("index-pomme");

let position = pomme.indexOf("pomme");
indexPomme2.innerHTML = position.toString();

// partie 2
let lastIndexM = document.getElementById("last-index-m");
let positionM = pomme.lastIndexOf('m');
    lastIndexM.innerHTML = positionM.toString();

// partie 3
if (pomme.startsWith("Elle")) {
    console.log("Elle est belle ma pomme");
}

// partie 4
if (pomme.endsWith("!")) {
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation");
}

// partie 5
let recupPomme = pomme.substring(18, 23);
    console.log(recupPomme);
let apple = document.getElementById("pomme");
    apple.innerHTML = recupPomme;

// partie 6
let table = pomme.split("");
    console.log(table);
let oneLine = document.getElementById("one-line");
for ( i = 0 ; i < table.length ; i++) {
    oneLine.innerHTML = table.toString();
}
