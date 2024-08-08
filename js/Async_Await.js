// Async / await


function descargarNuevosClientes (){
    return new Promise(resolve => {
        console.log('Descargando Clientes... Espere...')

        setTimeout( ()=> {resolve('Los clientes Fueron Descargados')}, 5000);
    })
};

function descargarUltimosPedidos (){
    return new Promise(resolve => {
        console.log('Descargando Pedidos... Espere...')

        setTimeout( ()=> {resolve('Los Pedidos Fueron Descargados')}, 3000);
    })
};


async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const Pedidos = await descargarUltimosPedidos();
        // console.log('Este codigo se retrasa');
        // console.log(clientes);

        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
    
}

app();

console.log('Este codigo no se Bloquea ni se retrasa');
//----------------------------------------------------------------------------------------
//SetTimeOut: espera el tiempo dado y luego hace la acciones
setTimeout( ()=>console.log('Set Timeout...'), 5000);//1000=1seg

//SetInterVal: cada cantidad de tiempo repite la accion
setInterval( ()=>console.log('Set Interval...'), 5000);//1000=1seg
