function ladosTriangulo (ladoA, ladoB, ladoC) {

let resultadoTriangulo;

if ((ladoA + ladoB) > ladoC) {

  resultadoTriangulo = 'isoceles'

} else if ((ladoB + ladoC) > lado A) {

resultadoTriangulo = 'escaleno'

} else if ((ladoA + ladoC) > ladoB) {

resultadoTriangulo = 'escaleno'} else if (ladoA == ladoB && ladoB == ladoC) { 

resultadoTriangulo = 'equilátero' } 

else {resultadoTriangulo = 'não é um triângulo'}

return resultadoTriangulo; 

}
