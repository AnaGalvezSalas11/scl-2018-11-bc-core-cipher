window.onload = () => {   //onload me aseguro que carge la estructura de la pagina y puego se cargan las funciones de javascript

    // traigo el div donde quiero que aparesca mi mensaje ya cifrado
    const contenedor = document.getElementById("cifrado");
    const contenedordos=document.getElementById("descifrado");


// acá guardo el mensaje que ingresa el usuario a cifrar

document.getElementById("cifrar").addEventListener("click", () => {

    let mensaje_cifrar=(document.getElementById("IngresaTexto").value).toUpperCase();
    let offset=document.getElementById("desplazamiento").value;
    offset=parseInt(offset)



contenedor.innerHTML = cipher.encode(mensaje_cifrar, offset);

});


document.getElementById("descifrar").addEventListener("click", () => {

    let mensaje_cifrar=(document.getElementById("IngresaTexto").value).toUpperCase();
    let offset=(document.getElementById("desplazamiento").value);
    offset=parseInt(offset)

contenedordos.innerHTML = cipher.decode(mensaje_cifrar, offset);

}); 

}
