//poo=programacion orientada a objetos

//object literal
const producto={
    nombre:'Tablet',
    precio:500
};


//object constructor
function Producto( nombre, precio ){
    this.nombre = nombre;
    this.precio = precio;
};

//Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function(){
    return `El producto: ${this.nombre}, tiene un precio de: ${this.precio}`;
}

function Cliente( nombre, apellido ){
    this.nombre = nombre;
    this.apellido = apellido;
};

Cliente.prototype.formatearCliente = function(){
    return `El Nombre es: ${this.nombre}, El apellido es: ${this.apellido}`;
}

const Producto2=new Producto('Monitor Curvo de 49"',800);
const Producto3=new Producto('Laptop"',1800);
const cliente= new Cliente('Josue','Vargas');

console.log(formatearProducto(Producto2));
console.log(Producto2);
console.log(Producto3);
console.log(cliente);

