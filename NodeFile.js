 


                                           //DEUXIEME INSTRUCTION 


const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Erreur lors de la lecture du fichier:', err);
    }
    console.log('Contenu du fichier welcome.txt :');
    console.log(data);
});

