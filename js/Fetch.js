async function obtenerEmpleados() {
    const archivo = 'empleados.json'

    //-------------------------------------------------------------------------
    fetch(archivo)
        .then(resultado => { return resultado.json();
        })
        .then(datos => {
            // console.log(datos);
            const { empleados } = datos;

            empleados.forEach(empleado => {console.log(empleado);
                //mostrar em Html
                // document.querySelector('.contenido').textContent = empleado.nombre;
            });
        })
    //-------------------------------------------------------------------------
        const resultado = await fetch(archivo);
        const datos=await resultado.json();
        console.log(datos);
}
obtenerEmpleados();