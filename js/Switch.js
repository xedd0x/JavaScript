const metodoPago = 'cheque';

switch (metodoPago) {
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    case 'efectivo':
        console.log(`Pago en ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`Pagara con ${metodoPago}`)
        break;
    default:
        console.log(`Aun no as pagado`)
        break;
}