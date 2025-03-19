// Sélectionner le bouton par son ID
const redirectButtonarabe = document.getElementById('redirectButtonarabe');

// Ajouter un écouteur d'événement pour le clic
redirectButtonarabe.addEventListener('click', function() {
    // Rediriger vers le fichier HTML spécifié
    window.location.href = '../arabe/index.html'; // redirection vers index.html en arabe
});