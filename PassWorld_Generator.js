
function genererMotDePasse(longueur) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+<>?';
    
    let motDePasse = '';
    
    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres.charAt(indexAleatoire);
    }
    
    return motDePasse;
}

const motDePasseAleatoire = genererMotDePasse(12);

console.log('Mot de passe généré :', motDePasseAleatoire);
