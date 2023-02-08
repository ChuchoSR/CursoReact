

export const getImagen = async() => {

    try {

        const apiKey = 'lr1ZS1oCw8yXh0xOTY9s8RMjsOO6m9Bt';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen'
    }
    
    
    
}

getImagen();



