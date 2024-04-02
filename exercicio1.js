function ladosTriangulo (ladoA, ladoB, ladoC) {
    let resultado;

    if (ladoA < (ladoB + ladoC) || ladoB < (ladoA + ladoC) || ladoC < (ladoA + ladoB)){
        if (ladoA < ladoB && ladoB == ladoC) {
        resultado = 'Isóceles'
    } else if (ladoB < ladoA && ladoA == ladoC) {
        resultado = 'Isóceles'
    } else if (ladoC < ladoA && ladoA == ladoB) {
        resultado = 'Isóceles'
    } else if (ladoA != ladoB && ladoB != ladoC) {
        resultado = 'Escaleno'
    } else if (ladoB != ladoC && ladoC != ladoB){
        resultado = 'Escaleno'
    } else if (ladoC != ladoA && ladoA != ladoB){
        resultado = 'Escaleno'
    } else if (ladoA == ladoB && ladoB == ladoC) {
        resultado = 'Equilátero'
    } else if (ladoB == ladoC && ladoC == ladoA){
        resultado = 'Equilátero'
    }else {
        resultado = 'Equilátero'
    }
    } else {
        resultado = 'Não possui medidas suficientes para ser um triângulo'
    }
    return resultado;
    }