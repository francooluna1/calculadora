//Creando elementos
const botonNumero = document.getElementsByName("numeros");
const botonOperacion = document.getElementsByName("operacion");
const botonIgual = document.getElementsByName("igual")[0];
const botonBorrar = document.getElementsByName("borrar")[0]; //[0] = para recorrer el primer arreglo
let resultado = document.getElementById("resultado");
let operacionActual = "";
let operacionAnterior = "";
let operacion = undefined;

//Agregar eventos
botonNumero.forEach(function(boton){  //forEach = para recorrer arreglos
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);       
    })
});

botonOperacion.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarOperacion(boton.innerText);   
    })
});

botonIgual.addEventListener('click', function(){
    calcularResultado();
    actualizarResultado();
});

botonBorrar.addEventListener('click', function(){
    limpiarResultado();
    actualizarResultado();
});

//Programar los eventos
function agregarNumero(num){
    operacionActual = operacionActual.toString() + num.toString();
    actualizarResultado();
};

function agregarOperacion(op){
    if(operacionActual === "") return;
    if(operacionAnterior !== ""){
        calcularResultado();
    } 
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
};

function calcularResultado(){
    let calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default: 
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = "";
};

function limpiarResultado(){
    operacionActual = "";
    operacionAnterior = "";
    operacion = undefined;
};

function actualizarResultado(){
    resultado.value = operacionActual;
};

limpiarResultado();
