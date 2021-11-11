const personatges = ["Goku", "Vegeta", "Trunks"];

const [p1,,p2] = personatges;

console.log(p1, p2);

const usaState = (valor) => {
    return [valor, ()=>{console.log("Hola Món")}]
};

const arr = usaState('Goku');

const [nom,setNom] = usaState("Guillem");

console.log(nom);
setNom();