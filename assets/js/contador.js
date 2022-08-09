// Necesito que este contador haga 3 cosas.
// Incremente de uno en uno.
// Decremente de uno en uno.
// Borre toda la cuenta.
// Necesitamos iniciar en 0;


let valorContador = 0;


//Variables Botones
const incrementarContador = document.querySelector('#incrementar');
incrementarContador.addEventListener('click', incrementar)

const decrementarContador = document.querySelector('#decrementar');
decrementarContador.addEventListener('click', decrementar)

const resetearContador = document.querySelector('#resetear');
resetearContador.addEventListener('click', resetear);

//Funciones

function incrementar(){
    valorContador++;
    document.querySelector('#contador').innerHTML = valorContador;
}

function decrementar(){
    document.querySelector('#contador').innerHTML = valorContador;
    if(valorContador > 0){
    valorContador--;
    }
}

function resetear(){
    valorContador = 0;
    document.querySelector('#contador').innerHTML = valorContador;
}