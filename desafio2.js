window.pronpt('Peso')
window.pronpt('altura')

const IMC = peso / altura ** 2;


if (0 <18.5){
    console.log('Abaixo do peso');
} else if (18.5 >= 24.9) {
    console.log('Peso normal');
} else if (25 >= 29.9){
    console.log('Sobrepeso')
} else if (30 >= 34.9){
    console.log('Obesidade grau I')
}else if (35 >= 39.9){
    console.log('Obesidade grau II')
} else {
    console.log('Obesidade grau III')
}





