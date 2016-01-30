/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contacts = {
    // Initialise le Contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Renvoie la description du contact
    descriptionContact: function () {
        var description = "Nom : " + this.nom + ",  Prenom : " + this.prenom;
        return description;
    },

    // Message des choix possibles
	affichageDeMessage: function () {
		console.log("1 - Lister vos contacts\n");
		console.log("2 - Ajouer un nouveau contact\n");
		console.log("3 - Quitter");
	}
};

// Tableau des contacts
var contacts = [];

// Ajout des premiers contacts
var contact1 = Object.create(Contacts);
contact1.init("Nelsonne", "Mélodie");
contacts.push(contact1);

var contact2 = Object.create(Contacts);
contact2.init("Lévisse", "Carole");
contacts.push(contact2);

// Message de bienvenue
console.log("Bienvenue dans le gestionnaire des contacts !");

// Premier affichage des choix possibles
Contacts.affichageDeMessage();

// Continuer tant que la variable continuer vaut true
var continuer = true;

// La boucle pour toujours continuer
while(continuer == true){
	// Recuperation du choix de l'utilisateur
	var choixUtilisateur = prompt("Entrez votre choix");
	// choix 1
	if(choixUtilisateur == 1){
		console.log("Voici la liste de tous vos contacts\n");

		// Affichage des contacts
		contacts.forEach(function (contact) {
		    console.log(contact.descriptionContact());
		});

		// Affichage du message des choix possibles
		Contacts.affichageDeMessage();

		// Continuer la boucle
		var continuer = true;
	}
	// choix 2
	else if(choixUtilisateur == 2){
		// Reperation du nouveau contact
		var nomContact = prompt("Entrez le nom votre nouveau contact");
		var prenomContact = prompt("Entrez le prenom de votre nouveau contact")
		// Initialisation de l'object nouveauContact
		var nouveauContact = Object.create(Contacts);
		nouveauContact.init(nomContact, prenomContact);

		// Ajout du nouveau contact dans le tableau contacts
		contacts.push(nouveauContact);

		//Message de confirmation
		console.log("Le nouveau contact a ete ajouter");

		// Affichage du message des choix possibles
		Contacts.affichageDeMessage();

		// Continuer la boucle
		var continuer = true;
	}
	// choix 3
	else if(choixUtilisateur == 3){
		console.log("Au revoir !");
		// Arreter la boucle
		var continuer = false;
	}
	// ou n'importe quel autre choix
	else{
		// Continuer la boucle
		var continuer = true;
	}
}
