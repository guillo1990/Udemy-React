import heroes, {marques} from './data/heroes.js';

export const getHeroeById = (id) =>{
    return heroes.find(heroi => heroi.id === id);
};

const getHeroeByOwner = (owner) =>{
    return heroes.filter((heroi) => heroi.owner === owner);
};

/*console.log(getHeroeById(3));
console.log(getHeroeByOwner('DC'));
console.log(marques);*/