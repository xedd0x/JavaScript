//This
//es una palabra reservada no se pueden crear variables o funciones con dichas palabras

const reservacion={
    nombre:'Josue',
    apellido:'Vargas',
    total:5000,
    pagado:false,
    informacion:function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}

const reservacion2={
    nombre:'Josue',
    apellido:'Vargas',
    total:5000,
    pagado:false,
    informacion:function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}

reservacion.informacion();
