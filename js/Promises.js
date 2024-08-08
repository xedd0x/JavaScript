const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('usuario autenticado'); //el promise se cumple
    } else {
        reject('no se pudo autenticar sesion');//el promise no se cumple
    };
});

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));

// console.log(usuarioAutenticado);

// en los promises existen 3 valores
//Pending: no se ha cumplido pero tampoco se ha rechazado
//Fulfilled: ya se ha cumplido
//Reject: Se ha rechazado o no se pudo cumplir