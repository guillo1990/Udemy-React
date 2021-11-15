import { Fragment } from "react";

const PrimeraApp = () => {

    const str = {
        nom: "Guillem",
        edat: 31
    };

    return (
        <>
            <h1>{JSON.stringify(str,null,3)}</h1>
            <p>My first application</p>
        </>        
    );

}

export default PrimeraApp;