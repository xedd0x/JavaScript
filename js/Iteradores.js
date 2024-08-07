//For Loop
for( let i=0;i<=10;i++ ){
    console.log(`For Loop: ${i}`);
};

for( let i=0;i<=10;i++ ){
    if(i % 2 === 0){
        console.log(`For Loop, El numero: ${i} es par`);
    }else{
        console.log(`For Loop, El numero: ${i} es inpar`);
    };
};

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

for( let i=0;i<=carrito.length;i++ ){
    console.log(carrito[i]);
};
//------------------------------------------------------------------------
//While Loop
//solo se ejecuta si las condiciones se cumplen

let i=0;
while(i<10){
    console.log(`While, El numero: ${i} `);
    i++;
}

let i2=0;
while(i2<10){
    if(i2 % 2 === 0){
        console.log(`While, El numero: ${i2} es par`);
    }else{
        console.log(`While, El numero: ${i2} es inpar`);
    };
    i2++;
}



//------------------------------------------------------------------------
//Do While Loop
// se ejecuta 1 ves aunque la condicion no se cumpla

let i3=0;

do{
    console.log(`Do While, El numero: ${i3} `);
    i3++
}while(i3<10)