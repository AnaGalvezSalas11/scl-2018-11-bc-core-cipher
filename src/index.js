window.onload = () => {   //onload me aseguro que carge la estructura de la pagina y luedo se cargan las funciones de javascript

    // traigo el div donde quiero que aparezca mi mensaje ya cifrado
    const contenedor = document.getElementById("cifrado");
    const contenedordos=document.getElementById("descifrado");


// acá guardo el mensaje que ingresa el usuario a cifrar

document.getElementById("cifrar").addEventListener("click", () => {

    let mensaje_cifrar=(document.getElementById("IngresaTexto").value).toUpperCase();
    let offset=document.getElementById("desplazamiento").value;
    offset=parseInt(offset)  //use este metodo para que sea el string sea captado como number



contenedor.innerHTML = cipher.encode(mensaje_cifrar, offset);

});


document.getElementById("descifrar").addEventListener("click", () => {

    let mensaje_cifrar=(document.getElementById("IngresaTexto").value).toUpperCase();
    let offset=(document.getElementById("desplazamiento").value);
    offset=parseInt(offset)

contenedordos.innerHTML = cipher.decode(mensaje_cifrar, offset);

}); 

//limpiar textos ingresados, cifrados y descrifrado:

const reset=document.getElementById("reset");
document.getElementById("resetText").addEventListener("click", () => {

    document.getElementById("IngresaTexto").value = "";
    document.getElementById("cifrado").innerHTML= "";
    document.getElementById("descifrado").innerHTML= "";

}); 



}


