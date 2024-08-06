const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible :true,
};

//Forma antigua
const precioProducto1= producto.precio;
const nombreProducto1= producto.nombreProducto;

console.log(precioProducto1);
console.log(nombreProducto1);

//Forma nueva Destructuring
const {precio, nombreProducto} = producto;//se puede declarar varios en una sola linea pero debe tener el mismo nombre
// const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);