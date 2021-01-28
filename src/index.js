import validator from './validator.js';

//ALMACENO LOS ELEMENTOS DEL DOM EN UNA CONSTANTE. Esa referencia no cambia
const nroTarjeta = document.getElementById("cardNum");
const btnIngresar = document.getElementById("validar");
const tarjetaInvalida = document.getElementById("tarjetaInvalida");
const bienvenida = document.getElementById("bienvenida");
const expresionR = { cardNum: /^[0-9]{1,16}$/}


tarjetaInvalida.style.color = 'red';


//EVENTOS DEL DOM PARA LLAMAR A FUNCIONES
nroTarjeta.addEventListener("click", habilitarBtn);
nroTarjeta.addEventListener("keyup", validarCaracter);
nroTarjeta.addEventListener("keyup", validarCero);
btnIngresar.addEventListener("click", validar);
btnIngresar.addEventListener("click", enmascarar);


//FUNCIONES
function habilitarBtn(){
    (nroTarjeta.value == null || nroTarjeta.value == "") ? 
    btnIngresar.disabled = true :
    btnIngresar.disabled = false;
}

function validarCaracter(){
    if(expresionR.cardNum.test(event.key)){
        nroTarjeta.classList.remove("cardNum-incorrecto");
        document.getElementById("caracterInvalido").classList.remove("mensajesInvalidoTrue");
        nroTarjeta.classList.add("cardNum-correcto");
        bienvenida.classList.remove("h1-cuandoCorrecto");
        tarjetaInvalida.classList.remove("mensajesInvalido-True");
        btnIngresar.disabled = false;

    }else{
        nroTarjeta.classList.add("cardNum-incorrecto");
        nroTarjeta.classList.remove("cardNum-correcto");
        document.getElementById("caracterInvalido").classList.add("mensajesInvalidoTrue");
        tarjetaInvalida.classList.add("mensajesInvalido-True");
        btnIngresar.disabled = true;
    }  
}
   
function validarCero(){
    (nroTarjeta.value == 0) ? btnIngresar.disabled = true : btnIngresar.disabled = false;
}
    

function validar(){
    let nro = nroTarjeta.value;
    let esValida = (validator.isValid(nro));
    //console.log(esValida);
    if(esValida == false){
        tarjetaInvalida.classList.add("mensajesInvalido-True");
        nroTarjeta.classList.add("cardNum-incorrecto");
        btnIngresar.disabled = true;  
    }else{
        bienvenida.classList.add("h1-cuandoCorrecto");
        }
}

function enmascarar(){
    let teclas = nroTarjeta.value;
    let maski = (validator.maskify(teclas));
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


















    
