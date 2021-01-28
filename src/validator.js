const validator = {

  isValid: function (creditCardNumber){
    let digitos = creditCardNumber;

    let digitos1 = digitos.split("").reverse();
    var isCardValid;


    let digitosNum = digitos1.map(function(digitos1){
      return parseInt(digitos1)
    });

    
    for(let i = 0; i <= digitosNum.length-1; i++){
      
      if(i%2 != 0){
        digitosNum[i] = digitosNum[i]*2; }// entra 6 //almacena el doble de los n'umeros en posidcion par
        //console.log(digitos[i]);
      if(digitosNum[i] > 9){
          let dec = digitosNum[i]%10;
          let ent = Math.trunc(digitosNum[i]/10);
          let suma = dec + ent;
          digitosNum[i] = suma; 
          }
        }

      const resultado = digitosNum.reduce(function(acu, ele){//acu elemento anterior donde se acumula la suma, ele valor actual que se le suma al anterior
        return acu + ele;
      },0);
      //console.log(resultado);

      if (resultado % 10 == 0){
        isCardValid = true ;// si es multiplo de 10 devuelve true
      }else{
        isCardValid = false;// sino devuelve false
      }
      //console.log(isCardValid);
      return isCardValid;

    },
    
    maskify: function(creditCardNumber){

     let prueba = creditCardNumber;
     let digitos2 = prueba.split("");

     for(let i = 0; i<digitos2.length-4 ; i++){
       digitos2[i] = '#';
     }

      let juntos = digitos2.join('');

     return juntos;     
    }
   };
    
export default validator;



