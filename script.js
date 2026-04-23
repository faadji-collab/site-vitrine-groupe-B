
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sélection des éléments du formulaire
    const form = document.querySelector('form');
    const btnEnvoyer = form.querySelector('button[type="submit"]');

    // boutton envoyez
    form.addEventListener('submit', (e) => {
        // Empêche la page de se recharger (comportement par défaut du HTML)
        e.preventDefault();

        // recuperation des utulisateur
        const données = {
            nom: document.getElementById('Nom').value,
            prenom: document.getElementById('Prenom').value,
            email: document.getElementById('Email').value,
            message: document.getElementById('Message').value
        };

        
        const texteOriginal = btnEnvoyer.innerText;
        btnEnvoyer.innerText = "Envoi en cours...";
        btnEnvoyer.disabled = true; // Désactive le bouton pendant l'envoi
        btnEnvoyer.style.opacity = "0.7";

        
        setTimeout(() => {
            // Affichage d'un message de succès personnalisé
            alert(`Merci ${données.prenom} ! Votre message a bien été envoyé au restaurant.`);

            // Réinitialisation du formulaire et du bouton
            form.reset();
            btnEnvoyer.innerText = texteOriginal;
            btnEnvoyer.disabled = false;
            btnEnvoyer.style.opacity = "1";
            
            console.log("Données envoyées :", données);
        }, 1500);

        
    });
});