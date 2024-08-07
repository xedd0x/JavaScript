//Clases
//siempre comenzar las clases con mayuscula

class Producto{
    //donde se meten los parametros
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    };
    formatearProducto(){
        return `El producto: ${this.nombre}, tiene un precio de: ${this.precio}`;
    };   
 
};

const producto2=new Producto('Monitor Curvo de 49"',800);
console.log(producto2);
console.log(producto2.formatearProducto());

//---------------------------------------------------------------------

//Herencia
//evitar duplicar codigos
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }

 
};

const libro= new Libro('JavaScript la revolucion',400,'13513513515');
console.log(libro.formatearProducto());





