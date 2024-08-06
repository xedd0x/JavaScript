
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"; /// la mas usada

// const producto4= String('Monitor 30 Pulgadas');
// const producto3= new String('Monitor 30 Pulgadas');

//para usar comillas dobles o caracteres que rompen el codigo en texto usar \
const producto2 = "Monitor HD\"";


// console.log(producto);
// console.log(producto4);
// console.log(typeof producto);
// console.log(typeof producto3);

const email= 'prueba@gmail.com';


console.log(tweet.length);// da la cantidad de caracteres que tiene la informacion en la variable

//indexof  devuelve la posicion de un texto buscado

console.log(tweet.indexOf('JavaScript'));
console.log(tweet.indexOf('tablet')); //si regresa negativo es que no lo encuentra
console.log(email.indexOf('@'));

//includes  devuelve la true si encuentra el texto o false si no

console.log(tweet.includes('JavaScript'));
console.log(tweet.includes('tablet')); //si regresa negativo es que no lo encuentra
console.log(email.includes('@'));