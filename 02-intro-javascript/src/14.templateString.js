const nom = 'Cris';
const cognom = 'Heredia';

const nomComplet = ` ${nom} ${cognom}`;

function getHola(nom){
    return `Què tal ${nom}?`;
}

console.log(`${ getHola(nom) }`);