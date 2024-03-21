function calculeIMC(){
    
    const 
     peso = window.prompt('Peso'),
     altura = window.prompt('altura'),
     IMC = peso / (altura ** 2);

    if (IMC < 18.5){
        window.alert(`IMC: ${IMC.toFixed(1)} --> Abaixo do peso`);
    } else if (IMC < 25) {
        window.alert(`IMC: ${IMC.toFixed(1)} --> Peso normal`);
    } else if (IMC < 30){
        window.alert(`IMC: ${IMC.toFixed(1)} --> Sobrepeso`)
    } else if (IMC < 35){
        window.alert(`IMC: ${IMC.toFixed(1)} --> Obesidade grau I`)
    }else if (IMC < 40){
        window.alert(`IMC: ${IMC.toFixed(1)} --> Obesidade grau II`)
    } else {
        window.alert(`IMC: ${IMC.toFixed(1)} --> Obesidade grau III`)} 
}

