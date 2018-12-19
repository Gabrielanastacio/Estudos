var primeiroValor = document.getElementById('primeiroValor')   

var segundoValor = document.getElementById('segundoValor')



function calcular(primeiroValor,segundoValor) {
    
    if(primeiroValor.value === ''){
       
        focusPrimeiroValor(primeiroValor);
    
    }else{

        alert('oooi');

    }

}

function focusPrimeiroValor(primeiroValor) {
    primeiroValor.focus();
}

function createSpanPrimeiroValor(){
    
}