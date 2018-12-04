window.cipher = {


  encode: (mensaje_cifrar, offset) => {
    /* Acá va tu código */

    let cifrado = "";

  for (let i = 0; i < mensaje_cifrar.length; i++) {

      let ascii= mensaje_cifrar[i].charCodeAt();
      if (ascii>=65 && ascii <=90) {                    //&& operador logico cuando ambos valores son verdaderos
      let letracifrada = (ascii-65+offset)%26+65;    //formula de michelle
      cifrado += String.fromCharCode(letracifrada);  //mediante este metodo obtengo lo cifrado en texto
      }else {
      cifrado += mensaje_cifrar[i];
  }
  }  
    
  return cifrado;

     },


  decode: (mensaje_cifrar, offset) => {
    /* Acá va tu código */

    let descifrado = "";

    for (let i = 0; i < mensaje_cifrar.length; i++) {
  
        let ascii= mensaje_cifrar[i].charCodeAt();
        if (ascii>=65 && ascii <=90) {                    
        let letradescifrada = (ascii-65-offset)%26+65;    
        descifrado += String.fromCharCode(letradescifrada);  
        }else {
          descifrado += mensaje_cifrar[i];
    }
    }  
      
    return descifrado;
  
       },}
