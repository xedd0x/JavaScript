const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisor 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

//forEach

meses.forEach(
    function (mes) {
        console.log(mes)
        if (mes == 'Marzo') {
            console.log('Si existe')
        }
    });

//Includes
let resultado = meses.includes('Diciembre');

//Some ideal para arreglo de objetos
resultado = carrito.some(
    function(producto){
        return producto.nombre === 'Celular Pro';
    }
);

// Reduce
resultado=carrito.reduce(
    function(total, producto){
        return total + producto.precio;
    }

,0);

// Filter
resultado = carrito.filter(
    function(producto){
        return producto.precio>400;
    }
);

console.log(resultado);
