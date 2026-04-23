
document.addEventListener('DOMContentLoaded', () => {

    // le formulaire dans contact.html
    const monFormulaire = document.querySelector('form');

    monFormulaire.addEventListener('submit', (e) => {
       
        e.preventDefault();

        const nom = document.getElementById('Nom').value;
        const prenom = document.getElementById('Prenom').value;
        const email = document.getElementById('Email').value;

        // Affichage du message de confirmation
        alert("Succès !\n\nBonjour " + prenom + " " + nom + ",\nVotre mail (" + email + ") a bien été reçu par notre équipe.");

        //validation du message de confirmation
        monFormulaire.reset();
    });
});