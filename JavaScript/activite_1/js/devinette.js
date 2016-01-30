/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Initiation de la variable compteur
var compteur = 0;
// Initiation du nombre de d'essai possible
var nbrEssai = 6;

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

console.log(solution);
while (compteur < nbrEssai) {
    // Recuperer un nombre avec l'utilisateur
    var nombre = Number(prompt("Entrez un nombre entre 0 et 100 : "));

    // Les conditions
    if(nombre > solution){
    	console.log(nombre + " est trop grand");
    }
    else if(nombre < solution){
    	console.log(nombre + " est trop petit");
    }
    else{
    	console.log("(Bravo ! la solution etait " + solution + ")");
    	console.log("vous avez trouver en " + (compteur + 1) + " essai(s)");
    	// Modification du compteur pour terminer la boucle while
    	compteur = nbrEssai;
    }


    // Incrementation du compteur
    compteur++;

    // Si les tours sont termine !
    if(compteur == nbrEssai){
    	console.log("Vous avez perdu. La solution etait " + solution);
    }
}

// Fin du programme
