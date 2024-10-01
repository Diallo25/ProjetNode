// Importer le module nodemailer
const nodemailer = require('nodemailer');

// Configurer le transporteur (service d'envoi d'e-mails)
let transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisation de Gmail comme service de messagerie (vous pouvez utiliser un autre service)
    auth: {        
        user: 'Mymail@gmail.com',
        pass: '####-####-####'       // Remplacez par votre mot de passe ou mot de passe d'application si 2FA activé
    }
});

// Options de l'email
let mailOptions = {
    from: 'Mymail@gmail.com',          // Expéditeur
    to: 'Yourmail@gmail.com',        // Destinataire
    subject: 'Envoi d\'un e-mail avec Node.js', // Sujet de l'email
    text: 'Hello, voici un e-mail envoyé avec Node.js et Nodemailer !', // Texte brut
    html: '<h1>Hello Node.js</h1><p>Voici un e-mail envoyé via Nodemailer.</p>' // Contenu HTML
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        return console.log('Erreur lors de l\'envoi :', err);
    }
    console.log('E-mail envoyé avec succès ! Détails :', info.response);
});
