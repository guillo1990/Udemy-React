import {getHeroeById} from './21-import-export';

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//        //console.log("2 seconds after");
       
//        const heroe = getHeroeById(2);
//        //console.log(heroe);
//        //resolve( heroe );
//        reject( 'Heroe not found' )
//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log('Then of promise', 'heroe: ', heroe);
// })
// .catch( err => console.warn( err ));

const getHoreoByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
           //console.log("2 seconds after");
     
           const heroe = getHeroeById(id);
           if (heroe === undefined){
                reject('Heroe not found');
           }
           else{
                resolve( heroe );
           }
           
           //reject( 'Heroe not found' )
        }, 2000);

    });
};

getHoreoByIdAsync(1)
    .then( console.log)
    .catch( console.warn );