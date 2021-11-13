const getImage = async() => {

    try{
        const apiKey = 'eTI2k9gAP2ma5ugMjZnYd7mk9w8VuG1O';
        const httpCall = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const data = await httpCall.json();

        
        const { url } = data.data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    } catch(err){
        console.error(err);
    }
};

getImage().then( console.log )