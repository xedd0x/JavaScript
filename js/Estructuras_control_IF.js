//Estructuras de control
//Verificar que las condiciones se cumplan

const puntaje=1000;

if(puntaje==1000){
    console.log(`Si el puntaje es ${puntaje}`)
}else{
    console.log(`${puntaje} no es 1000`)
}

//--------------------------------------------------------------------------
const efectivo=1000;
const carrito=800;

if(efectivo>carrito){
    console.log(`El usuario puede pagar, el vuelto es: ${efectivo-carrito}`)
}else{
    console.log(`El usuario no puede pagar, Le falta: ${efectivo-carrito}`)
}
//--------------------------------------------------------------------------

const rol = 'administrador';

if (rol=='administrador'){
    console.log(`Acceso a todo el Sistema`)
}else if(rol=='editor'){
    console.log(`Acceso a Editar en el Sistema`)
}else{
    console.log(`No Tienes Acceso al Sistema`)
}