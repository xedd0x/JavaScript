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

//---------------------------------------------------------
//ForEach
//es mas util para mostrar la informacion
console.log('ForEach');
const arreglo1 = carrito.forEach(producto=>producto.nombre);
console.log(arreglo1);// no sirve con foreach
//---------------------------------------------------------
//Map
//es mas util para generar un nuevo arreglo
console.log('Map');
const arreglo2 =carrito.map(producto=>producto.nombre);
console.log(arreglo2);