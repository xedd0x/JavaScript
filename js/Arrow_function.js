//Arrow function

//sin arrow function
const sumar1 = function(n1,n2){
    console.log(n1+n2);
};


//con arrow function
const sumar2 = (n3,n4)=>console.log(n3+n4);// puede o no tener los corchetes que cubren el console.log

sumar1(5+10);
sumar2(5+10);


const aprediendo = (tecnologia) =>{
    console.log(`Aprendiendo ${tecnologia}`);
};

aprediendo('JavaScript');

//--------------------------------------------------------------------------------------------


// metodos de Metodos_array_2 optimizados con arrow function

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

meses.forEach( mes => {
        if (mes == 'Marzo') {
            console.log('Si existe')
        }
    });
    
//Some ideal para arreglo de objetos
resultado = carrito.some(producto=> producto.nombre === 'Celular Pro');

// Reduce
resultado=carrito.reduce((total, producto)=> total + producto.precio,0);

// Filter
resultado = carrito.filter(producto => producto.precio>400);

console.log(resultado);

