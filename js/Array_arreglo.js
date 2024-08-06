//arreglos o arrays

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');

const arreglo = ["Hola",10,true,true,"si",null,{nombre:"Josue",trabajo:"Programador"},[1,2,3]];
console.log(arreglo);


//acceder a los valores de un arreglo(usando indice)

console.log(arreglo[5]);


//conocer la extension de un arreglo
console.log(arreglo.length);

// iterador para ver cada elemento del arreglo
numeros.forEach(function(numero){
    console.log(numero);
});

