console.log("Hello world!");

const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const calcular = document.getElementById("btn-calcular");
const dignostico = document.getElementById("diagnostico");

calcular.addEventListener("click", function (){

    let imc = calcularImc(peso.value,altura.value);
    diagnostico.innerText = diagnosticarImc(imc);
});


function calcularImc(peso,altura) { 
    return peso/Math.pow((altura/100),2);
}

function diagnosticarImc(imc) {
    if( imc <= 18.5) {
        return "Abaixo do peso";
    } else if(imc >= 18.6 && imc <= 24.9) {
        return "Peso ideal";
    } else if (imc >= 25 && imc <= 29.9) {
        return ("Levemente acima do peso")
    } else if (imc >= 30 && imc <=34.9) {
        return ("Obesidade grau I")
    } else if(imc >= 35 && imc <= 39.9) {
        return ("Obesidade grau II")
    } else if(imc > 40) {
        return ("Obesidade grau III")
    }
}

