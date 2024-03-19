const temperatura = parseFloat(window.prompt('Qual valor da temperatura?'));
const escala = window.prompt('Digite a escala atual se é em c ou f ou k').toLowerCase();
const conversao = window.prompt('Qual escala deve ser?').toLowerCase();

if (!isNaN(temperatura)) {
    if (isNaN(escala)) {
        if (isNaN(conversao)){
        if (escala == 'c'){
            if (conversao == 'f') {
                window.alert(`A temperatura convertida é ${((temperatura * 9/5) + 32).toFixed(2)}`);
            } else if (conversao == 'k') { 
                window.alert(`A temperatura convertida é ${(temperatura - 273.15).toFixed(2)}`);
            } else {
            window.alert('A conversao não pode ser igual a escala atual')
            }
        } else if (escala == 'f'){
            if (conversao == 'k'){
                window.alert(`A temperatura convertida é ${((temperatura - 32)* 5/9).toFixed(2)}`);
            } else if (conversao == `c`) {
                window.alert(`A temperatura convertida é ${((temperatura + 459.67) * 5/9).toFixed(2)}`);
            }  else {
                window.alert('A conversao não pode ser igual a escala atual')
            }
        } else {
            if (conversao == 'c') {
                window.alert(`A temperatura convertida é ${(temperatura + 273.15).toFixed(2)}`);
            } else if (conversao == 'f') {
                window.alert(`A temperatura convertida é ${((temperatura - 273.15) * 9/5 + 32).toFixed(2)}`);
            } else {
                window.alert('A conversao não pode ser igual a escala atual')
            }
        } } else {
                window.alert('A escala não pode ser número! Atualize a página!')
                } } else {
                    window.alert('A conversão não pode ser número! Atualize a página!')
                    } 
} else {
    window.alert('Foi informado uma letra no valor da temperatura! Atualize a página!')
    }     