const apiKey = 'eTI2k9gAP2ma5ugMjZnYd7mk9w8VuG1O';

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCall
    .then( resp => resp.json())
    .then( ({ data }) => {
        //console.log(data.images.original.url)
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn )