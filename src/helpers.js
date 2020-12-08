export function calcularTotal( cant, plazo ) {
    let totalCantidad;

    if(cant <= 1000){
        totalCantidad = cant * .25
    }else if( cant > 1000 && cant < 5000){
        totalCantidad = cant * .20
    }
    else if( cant > 5000 && cant < 10000){
        totalCantidad = cant * .15
    }else{
        totalCantidad = cant * .10
    }

    let totalPlazo = 0

    switch(plazo){
        case 3:
            totalPlazo = cant * 0.05
            break
        case 6:
            totalPlazo = cant * 0.10
            break
        case 12:
            totalPlazo = cant * 0.15
            break
        case 24:
            totalPlazo = cant * 0.20
            break
        default:
            break
    }
    
    // console.log(`Impuesto cantidad ${parseInt(totalCantidad)}`)
    // console.log(totalPlazo)
    // console.log(cant)
    return totalPlazo + totalCantidad + cant 
}