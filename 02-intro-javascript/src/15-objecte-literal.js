const persona = {
    nom: 'Bruce',
    cognom: 'Banner',
    edat: '47',
    direccio: {
        ciutat: 'Chicago',
        zip: '02938',
        lat: 34.23123123,
        lng: 33.41321231
    }
};

const persona2 = {...persona};

persona2.nom = "Tony";

//console.table(persona);
console.log(persona);
console.log(persona2);
