function converteTemperatura (valorTemperatura, escalaAtual, escalaConvertida) {

    let resultadoConvertido, msgErro;
    
    if (!isNaN(valorTemperatura)) {

            if (escalaAtual == 'C'){
                if (escalaConvertida == 'F') {
                    resultadoConvertido = `A temperatura ${valorTemperatura} da escala selecionada: Fahrenheit convertida -> ${((valorTemperatura * 9/5) + 32).toFixed(2)}`;
                } else if (escalaConvertida == 'K') { 
                    resultadoConvertido = `A temperatura ${valorTemperatura} da escala selecionada: Kelvin convertida -> ${(valorTemperatura - 273.15).toFixed(2)}ºK`;
                } else if (escalaConvertida == `C`) { 
                    msgErro = `Erro: Escala selecionada: Celsius.Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
                } else {
                    msgErro = `Erro: Escala selecionada. Essa escala não existe ou não está disponível neste programa`;
                }
            } else if (escalaAtual = 'F'){
                if (escalaConvertida = 'K'){
                    resultadoConvertido = `A temperatura ${valorTemperatura} da escala selecionada: Kelvin convertida -> ${((valorTemperatura - 32)* 5/9).toFixed(2)}ºK`;
                } else if (EscalaConvertida == `C`) {
                    resultadoConvertido = `A temperatura ${valorTemperatura} da escala selecionada: Celsius convertida -> ${((valorTemperatura + 459.67) * 5/9).toFixed(2)}ºC`;
                }  else if (escalaConvertida = 'F') { 
                    msgErro = `Escala selecionada: ${escalaAtual}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
                } else {
                    msgErro = `Escala selecionada: ${escalaAtual}. Essa escala não existe ou não está disponível neste programa`;
                }
            } else {
                if (escalaConvertida = 'C') {
                    resultadoConvertido = `A temperatura ${valorTemperatura} da escala selecionada: Celsius convertida -> ${(valorTemperatura + 273.15).toFixed(2)}ºC`;
                } else if (escalaConvertida = 'F') {
                    resultadoConvertido = `A temperatura ${valorTemperatura} da escala selecionada: Fahrenheit convertida -> ${((valorTemperatura - 273.15) * 9/5 + 32).toFixed(2)}ºF`;
                } else if (escalaConvertida == 'K') { 
                    msgErro = `ERRO: escala selecionada: ${escalaAtual}.Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
                } else {
                    msgErro = `ERRO: Escala selecionada: ${escalaAtual}. Essa escala não existe ou não está disponível neste programa`
                }
            } } else {
                msgErro = 'ERRO: O número informado não é um número válido';
            }
            return {
                valorTemperatura: valorTemperatura,
                escalaAtual: escalaAtual,
                escalaConvertida: escalaConvertida,
                resultadoConvertido: resultadoConvertido,
                msgErro: msgErro
            };
} 

 