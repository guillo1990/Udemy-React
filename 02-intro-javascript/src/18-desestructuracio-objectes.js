const persona = {
    nom: "Tony",
    edat: 45,
    cognom: "Stark",
    rang: "Supreme"
};

const getContext = ({nom, cognom,edat,rang="Capità"}) => {
    return {
        nomRang: rang,
        anys: edat,
        latlng: {
            lat: 12.3123,
            lng: 13.231
        }
    }
};

const {nomRang, anys, latlng:{lat,lng}} = getContext(persona);

console.log(nomRang, anys, lat, lng);