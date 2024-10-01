                                          //PREMIERE ISTRUCTION 

const fs = require('fs');

const contenu = 'Hello Node';

fs.writeFile('welcome.txt', contenu, (err) => {
    if (err) {
        return console.error('Erreur lors de la création du fichier:', err);
    }
    console.log('Fichier "welcome.txt" créé avec succès contenant "Hello Node"');
});