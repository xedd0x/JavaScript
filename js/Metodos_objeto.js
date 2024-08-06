"use strict";//obliga a usar buenas practicas
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible :true,
};

Object.freeze(producto);// evita que se agregue,elimine o modifique el objeto

Object.seal(producto);// solo permite modificar la informacion en el objeto

// producto.imagen ="imagen.jpg"; //edicion del objeto

console.log(Object.isFrozen(producto));// devuelve si el objeto esta congelado o no
console.log(Object.isSealed(producto));// devuelve si el objeto esta sellado