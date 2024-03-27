function converteTemperatura (valorTemperatura, escalaAtual, escalaConvertida) {
    
    if (!isNaN(valorTemperatura)) {

            if (escalaAtual === 'c'){
                if (escalaConvertida === 'f') {
                    window.alert(`A temperatura ${escalaAtual} da escala selecionada: ${escalaConvertida} convertida -> ${((valorTemperatura * 9/5) + 32).toFixed(2)}ºF`);
                } else if (escalaConvertida === 'k') { 
                    window.alert(`A temperatura ${escalaAtual} da escala selecionada: ${escalaConvertida} convertida -> ${(valorTemperatura - 273.15).toFixed(2)}ºK`);
                } else if (escalaConvertida === 'c') { 
                    window.alert(`Escala selecionada: ${escalaAtual}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
                } else {
                    window.alert(`Escala selecionada: ${escalaAtual}. Essa escala não existe ou não está disponível neste programa`)
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

} return = resultadoConvertido

 