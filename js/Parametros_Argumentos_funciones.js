//parametros son los que estan medio de los parentesis.
function sumar(numero1,numero2){//numero1 y numero 2 son parametros
    console.log(numero1+numero2);
};
sumar(10,10); //argumentos o los valores reales son los de dentros de parentesis
sumar(710,102); //argumentos o los valores reales son los de dentros de parentesis
sumar(103,610); //argumentos o los valores reales son los de dentros de parentesis
sumar(104,103); //argumentos o los valores reales son los de dentros de parentesis
const sumar2 = function(n1,n2){
    console.log(n2+n1);
};
sumar2(5+10);
sumar2(25+10);
sumar2(5+140);

//parametros default
function sumar3(numero3=0,numero4=0){//se establecen como 0 para que por default tenga 0 si no se ingresa un argumento
    console.log(numero3+numero4);
};