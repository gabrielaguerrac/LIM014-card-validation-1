import validator from './validator.js';
//eslint-disable-next-line no-unused-vars
console.log(validator.isValid1);

//let resultado = validator.finalResult;

//let cardNum = document.getElementById("creditNum").value;

// document.getElementById("btnValidar").addEventListener("click", validar);

// function validar(){
//     let card = document.getElementById("creditNum").value;
//     console.log(card);
//     console.log(typeof card);
// } FUNCIONA V1


// function validar(){
//     let nro = document.getElementById("cardNum").value;
//     console.log(nro);
//     validator.isValid(nro);

//     console.log(validator.finalResult);

//     // if(validator
//     //     console.log(validator.mensaje);
//     //     // document.getElementById("cardNum").addEventListener("onkeyup", showDetail);
//     // }else{
//     //     document.getElementById("mnjInvalido").style.display = "block";
//     // }
    
// }


const nroTarjeta = document.getElementById("cardNum");
const btnIngresar = document.getElementById("validar");
/* const expDate = document.getElementById("expDate");
const cvv = document.getElementById("cvv"); */
const expresionR = {
    cardNum: /^[0-9]{1,16}$/
}

//nroTarjeta.addEventListener("click", showDetail);
//nroTarjeta.addEventListener('keyup', usandoKey);
nroTarjeta.addEventListener("keyup", validarCaracter);
btnIngresar.addEventListener("click", validar);
btnIngresar.addEventListener("click", enmascarar);
/* expDate.addEventListener("click", validar);
expDate.addEventListener("click", enmascarar); */
/* nroTarjeta.addEventListener("keyup", (event) =>{
    console.log(event);
    var key = event.key;
    console.log(key);
    console.log(typeof key);//string
    
    
}); */ //base

//

//algo para tener un backup de lo q estoy capturando





function usandoKey(){
    console.log(event);
    console.log(KeyboardEvent.key);
    let cuadradito = KeyboardEvent.key;
    console.log(cuadradito);
    console.log(typeof cuadradito);
}


/* let numeroReal =[];
numeroReal.length = 16; */

/* function showDetail(){
    document.getElementById("creditCard").style.display = "block";
} */

function validarCaracter(){
    if(expresionR.cardNum.test(event.key)){
        document.getElementById("cardNum").classList.remove("cardNum-incorrecto");
        /* expDate.disabled = false;
        cvv.disabled = false; */
        document.getElementById("caracterInvalido").classList.remove("mensajesInvalidoTrue");
        document.getElementById("cardNum").classList.add("cardNum-correcto");
    }else{
        document.getElementById("cardNum").classList.add("cardNum-incorrecto");
      /*   expDate.disabled = true;
        cvv.disabled = true; */
        document.getElementById("cardNum").classList.remove("cardNum-correcto");
        document.getElementById("caracterInvalido").classList.add("mensajesInvalidoTrue");//no se muestra
    }
    
}
    //console.log(event.key);
    /* console.log(numeroReal); */

    function validar(){
        //let nro = usandoValue();
        //let cardNumber = document.getElementById("cardNum").KeyboardEvent.key;
        //let nro = cardNumber;
        let nro = nroTarjeta.value;
        console.log(nro);
        
        //validator.isValid(nro);
        let esValida = (validator.isValid(nro));// 
       //console.log(validator.isValid.);
        if(esValida == false){
            document.getElementById("tarjetaInvalida").style.display = "block";
            btnIngresar.disabled = true;
        }else{
            document.getElementById("bienvenida").display = "inline";
        }
    }

    function enmascarar(){
        let teclas = nroTarjeta.value;
    //numeroReal = nroTarjeta.value;
    //console.log(numeroReal);
    let maski = (validator.maskify(teclas));
    //console.log(event);
    nroTarjeta.value = maski;
    
    }

    




   

   

    /*const inputValue = [(event.target.value)];
   
    console.log(inputValue) */

     

    /* let maski = (validator.maskify(inputValue));
    console.log(maski); */
    

    //let key = event.key;
    //let maski = (validator.maskify(key));



//document.getElementById("cardNum").addEventListener("keyup", enma1(KeyboardEvent.key));
//document.getElementById("maski").addEventListener("click", maskify); enmascara pero cmabia valor
/* expDate.addEventListener("click", (e) => {
    e.preventDefault
}); */
//expDate.addEventListener("click", validar);




/* function isEmpty(){
    if(nroTarjeta ==''){
        
    }
} */




/* function enma1(e){
    let carac = e;
    console.log(carac);
} */

/* function enmascarar(){
    let input = document.getElementById("cardNum").value;
    console.log(input);
    //let maski = (validator.maskify(input));
    


} */


/* function maskify(){
    let num = document.getElementById("cardNum").value;
    console.log(num);
    

    let nuevoString = (validator.maskify(num));
    
    console.log(nuevoString);
    
    console.log(num);
    
    document.getElementById("cardNum").value = nuevoString; 
   
   // nuevoString.textContent;
    
    //return nuevoString;
} */ //enmascara pero cambia el valor y valida



//funciona


    
