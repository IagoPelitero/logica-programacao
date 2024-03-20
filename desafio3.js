const temperatura = parseFloat(window.prompt('Qual valor da temperatura?'));

if (!isNaN(temperatura)) {
    const escala = window.prompt('Digite a escala atual se é em c ou f ou k').toLowerCase(),
          conversao = window.prompt('Qual escala deve ser?').toLowerCase(); 
        if (escala === 'c'){
            if (conversao === 'f') {
                window.alert(`A temperatura ${temperatura} da escala selecionada: ${escala} convertida -> ${((temperatura * 9/5) + 32).toFixed(2)}ºF`);
            } else if (conversao === 'k') { 
                window.alert(`A temperatura ${temperatura} da escala selecionada: ${escala} convertida -> ${(temperatura - 273.15).toFixed(2)}ºK`);
            } else if (conversao === 'c') { 
                window.alert(`Escala selecionada: ${escala}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
            } else {
                window.alert(`Escala selecionada: ${escala}. Essa escala não existe ou não está disponível neste programa`)
            }
        } else if (escala === 'f'){
            if (conversao === 'k'){
                window.alert(`A temperatura ${temperatura} da escala selecionada: ${escala} convertida -> ${((temperatura - 32)* 5/9).toFixed(2)}ºK`);
            } else if (conversao === `c`) {
                window.alert(`A temperatura ${temperatura} da escala selecionada: ${escala} convertida -> ${((temperatura + 459.67) * 5/9).toFixed(2)}ºC`);
            }  else if (conversao === 'f') { 
                window.alert(`Escala selecionada: ${escala}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
            } else {
                window.alert(`Escala selecionada: ${escala}. Essa escala não existe ou não está disponível neste programa`)
            }
        } else {
            if (conversao === 'c') {
                window.alert(`A temperatura ${temperatura} da escala selecionada: ${escala} convertida -> ${(temperatura + 273.15).toFixed(2)}ºC`);
            } else if (conversao === 'f') {
                window.alert(`A temperatura ${temperatura} da escala selecionada: ${escala} convertida -> ${((temperatura - 273.15) * 9/5 + 32).toFixed(2)}ºF`);
            } else if (conversao === 'k') { 
                window.alert(`Escala selecionada: ${escala}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
            } else {
                window.alert(`Escala selecionada: ${escala}. Essa escala não existe ou não está disponível neste programa`)
            }
        } } else {
            window.alert('O número informado não é um número válido')
        }
 