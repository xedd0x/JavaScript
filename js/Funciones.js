//Funciones

//declaracion de funcion
function sumar(){
    console.log(10+10);
};

sumar();

//Expresion de la funcion

const sumar2 = function(){
    console.log(3+3);
};

sumar2();

// IIFE sirve para que no se mesclen con otros archivos las variables

(function (){
    console.log('Esto es una funcion, que se llama sola');
})();

