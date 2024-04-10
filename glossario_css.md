1 - Pegue o reset pelo google digitando:

[Reset meyer](https://meyerweb.com/eric/tools/css/reset/)

Para fontes diferente temos o [Google Fonts](https://fonts.google.com/)

### Glossário CSS

`font-family` -> fonte da página será defida para toda a tag do HTML;

`sans-serif` -> sem serifa

`Widht` -> largura da página

~~~CSS
border-width: 1px;
border-style: solid;
border-color: black;
~~~

Cria uma linha nos elementos;

`Border: 1px solid #000` -> um shorthand para realizar a mesma função acima. Cria uma linha nos elementos;

`margin` -> margem do HTML. (obs: Quando eu defino uma borda no **CSS**, podemos usar a magem automática);

`.class`(ponto+nome da class) -> seletor de class declarada no HTML;

`text-align` -> alinha o texto da página, (o center alinha ao centro);

`font-size` -> define o tamanho da fonte da página;

`rem` -> padrão da página;

`padding` -> preenchimento;

`display: flex` -> Vai organizar os elementos com flexbox;

`justify-content: space-between` -> ajusta um ao lado do outro com o display-flex;

`height` -> determina a altura da área do conteúdo de um elemento;

`background-color` -> cor de fundo;

`border-raius` -> arredonda as bordas;

`black shadow` -> cria uma sombra onde possui;box-shadow => também é um short hand (primeiro horizontal, vertical, espalhamento {entre 2 e 4 pix deixa melhor para ficar borrada}, por último a cor da sombra);

`gap` -> dá um espaço;

`line-height` -> Altura da linha

`box-sizing: border-box` -> ajusta o tamanho da borda na página para que não fiquem "encavalados".

**Curiosidade**: O botão é mais difícil de estilizar pois quando sobrevoamos ou clicamos vem padrão do navegador na estilização que mostra sua cor.

*Pseudo classe:* representa um estado do elemento. Um exemplo disso é na aplicação do sobrevoo do mouse que recebe um elemento em um estado e quando clicamos é outro elemento e outro estado.

`:hover` -> estilizando o sobrevoo do botão

`cursor: pointer` -> sobrevoa o **botão** com o ícone de uma **mãozinha** clicando.

`:active` -> um estado rádpido do clique (enquanto dura o clique no mouse)

`box-shadow: inset;` -> sobra mais fraca

Para mais informações: [pseudo classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

### Joguinho do sapo 

[Flexbox Froggy](https://flexboxfroggy.com/)

~~~CSS
#pond {
display: flex; 
justify-content: center;
flex-wrap: wrap-reverse;
flex-direction: column-reverse; 
align-content: space-between; 
}
~~~

`display` -> define se um elemento é tratado como um bloco ou caixa embutida e o layout usado para os elementos internos, como flow layout , grid ou flex.

`= flex` -> define como um item flexível aumentará ou diminuirá para caber no espaço;

`justify-content` -> A propriedade CSS define como o navegador distribui o espaço entre e ao redor dos itens de conteúdo ao longo do eixo principal de um contêiner flexível e do eixo embutido de um contêiner de grade.

`flex-wrap` -> Alinha os elementos de forma sequêncial separados dentro de uma caixa.

`wrap-reverse`-> Alinha em colunas porém a contagem é invertida (da esquerda para direita).

`flex-direction` -> define como os items são colocados e define o eixo principal e a direção (normal ou invertida).

`align-content` -> define a distribuição do espaço entre e ao redor dos itens de conteúdo ao longo do eixo cruzado de um flexbox ou do eixo de bloco de um elemento em nível de grade ou bloco. (eixo principal)

`align-items` -> alinha o eixo dos itens secundários.



