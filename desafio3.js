function converteTemperatura (valorTemperatura, escalaAtual, escalaConvertida) {
    
    if (!isNaN(valorTemperatura)) {

            if (escalaAtual === 'c'){
                if (escalaConvertida === 'f') {
                    resultadoConvertido = (`A temperatura ${valorTemperatura} da escala selecionada: ${escalaAtual} convertida -> ${((valorTemperatura * 9/5) + 32).toFixed(2)}ºF`);
                } else if (escalaConvertida === 'k') { 
                    resultadoConvertido = (`A temperatura ${valorTemperatura} da escala selecionada: ${escalaConvertida} convertida -> ${(valorTemperatura - 273.15).toFixed(2)}ºK`);
                } else if (escalaConvertida === 'c') { 
                    resultadoConvertido = (`Escala selecionada: ${escalaAtual}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
                } else {
                    resultadoConvertido = (`Escala selecionada: ${escalaAtual}. Essa escala não existe ou não está disponível neste programa`)
                }
            } else if (escalaAtual === 'f'){
                if (escalaConvertida === 'k'){
                    resultadoConvertido = (`A temperatura ${valorTemperatura} da escala selecionada: ${escalaAtual} convertida -> ${((valorTemperatura - 32)* 5/9).toFixed(2)}ºK`);
                } else if (EscalaConvertida === `c`) {
                    resultadoConvertido = (`A temperatura ${valorTemperatura} da escala selecionada: ${escalaAtual} convertida -> ${((valorTemperatura + 459.67) * 5/9).toFixed(2)}ºC`);
                }  else if (escalaConvertida === 'f') { 
                    resultadoConvertido = (`Escala selecionada: ${escalaAtual}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
                } else {
                    resultadoConvertido = (`Escala selecionada: ${escala}. Essa escala não existe ou não está disponível neste programa`)
                }
            } else {
                if (escalaConvertida === 'c') {
                    resultadoConvertido = (`A temperatura ${valorTemperatura} da escala selecionada: ${escalaAtual} convertida -> ${(valorTemperatura + 273.15).toFixed(2)}ºC`);
                } else if (escalaConvertida === 'f') {
                    resultadoConvertido = (`A temperatura ${valorTemperatura} da escala selecionada: ${escalaAtual} convertida -> ${((valorTemperatura - 273.15) * 9/5 + 32).toFixed(2)}ºF`);
                } else if (escalaConvertida === 'k') { 
                    resultadoConvertido = (`Escala selecionada: ${escalaAtual}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
                } else {
                    resultadoConvertido = (`Escala selecionada: ${escalaAtual}. Essa escala não existe ou não está disponível neste programa`)
                }
            } } else {
                window.alert('O número informado não é um número válido')
            }

} return = resultadoConvertido;

 