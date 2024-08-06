const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];
console.table(meses);

numeros.push(60);
numeros.push(70,80);  //agrega al final del arreglo

console.table(numeros);

numeros.unshift(-10,-20,-30); // agrega al inicio del arreglo

console.table(numeros);

meses.pop();//elimina el ultimo elemento del arreglo
meses.shift();//elimina el primer elemento del arreglo

meses.splice(2, 1);// el primer digito es de donde comienza a eliminar el segundo es cuantos seguira eliminando desde ese punto

// rest operator o spread operator para hacer otros arreglos y no modificar el original

const nuevoArreglo =[...meses, 'Junio'];
console.table(meses);


