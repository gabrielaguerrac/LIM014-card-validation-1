const validator = {
  isValid1: "dentroDeValidator",

  isValid: function (creditCardNumber){
    let digitos = creditCardNumber;

    let digitos1 = digitos.split("");
    var isCardValid;
    //let mensaje;
    // console.log(digitos);
    // console.log(typeof digitos);
    // console.log(digitos instanceof Array);
    // console.log(digitos.length);
    // console.log(digitos[2]);

    let digitosNum = digitos1.map(function(digitos1){
      return parseInt(digitos1)
    });
    console.log(digitosNum);
    console.log(digitosNum.length);
    

    for(let i = 0; i <= digitosNum.length-1; i++){
      //console.log(digitosNum[i]);
      if(i==0 || i%2 == 0){
        //console.log(digitosNum[i]);
        digitosNum[i] = digitosNum[i]*2; }// entra 6 //almacena el doble de los n'umeros en posidcion par
        //console.log(digitosNum);
      if(digitosNum[i] > 9){
          let dec = digitosNum[i]%10;
          let ent = Math.trunc(digitosNum[i]/10);
          let suma = dec + ent;
          digitosNum[i] = suma; 
          //console.log(digitosNum[i]);
          }
        }

      const resultado = digitosNum.reduce(function(acu, ele){//acu elemento anterior donde se acumula la suma, ele valor actual que se le suma al anterior
        return acu + ele;
      },0);
      console.log(resultado);

      if (resultado % 10 == 0){
        isCardValid = true ;// si es multiplo de 10 devuelve true
      }else{
        isCardValid = false;// sino devuelve false
      }
      console.log(isCardValid);

      return isCardValid;

        },
    
    maskify: function(creditCardNumber){
/*       let digitos2 = creditCardNumber.split("");

      for(let i = 0; i<digitos2.length-4 ; i++){
        digitos2[i] = '#';
        
      }


      console.log(digitos2);
      let juntos=digitos2.join('');
      console.log(juntos);
      console.log(typeof juntos)
      
     return juntos; FUNCIONA*/



     let prueba = creditCardNumber;
     console.log(prueba);
     console.log(typeof prueba);
     let digitos2 = prueba.split("");

     

     for(let i = 0; i<digitos2.length-4 ; i++){
       digitos2[i] = '#';
       
     }
     console.log(digitos2);
      let juntos=digitos2.join('');
      console.log(juntos);
      console.log(typeof juntos)
     return juntos;
      //console.log(creditCardNumber);
    /*  let caracteres = []

     for(let i; i < 16; i++){
       caracteres[i] = creditCardNumber;
       console.log(caracteres);
     } */

     

     //caracter.push(creditCardNumber);

    
     


     

     /* for(let i = 0; i<caracter.length-4; i++){
       caracter[i] = '#';
     } */
     //console.log(caracter);
     
    }
   };
    
export default validator;



