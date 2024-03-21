function calculeIMC(peso, altura){
    
    const IMC = peso / (altura ** 2);
    let mensagem;

    if (IMC < 18.5){
        mensagem = `IMC: ${IMC.toFixed(1)} --> Abaixo do peso`;
    } else if (IMC < 25) {
        mensagem = `IMC: ${IMC.toFixed(1)} --> Peso normal`;
    } else if (IMC < 30){
        mensagem = `IMC: ${IMC.toFixed(1)} --> Sobrepeso`;
    } else if (IMC < 35){
        mensagem = `IMC: ${IMC.toFixed(1)} --> Obesidade grau I`;
    }else if (IMC < 40){
        mensagem = `IMC: ${IMC.toFixed(1)} --> Obesidade grau II`;
    } else {
        mensagem = `IMC: ${IMC.toFixed(1)} --> Obesidade grau III`;} 

    return mensagem;
}

