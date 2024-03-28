# logica-programacao

Treinamento de lógica de programação com JavaScript

## operadores-aritmeticos.js

```js
const numero1 = 40;
const numero2 = 20;
```

A palvra `const` é utilizada para declaração de variáveis que não vão ser reatribuídas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Os números das operação são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtração dos números é ${numero1 - numero2}`);
console.log(`A multiplicação dos números é ${numero1 * numero2}`);
console.log(`A divisão dos números é ${numero1 / numero2}`);
console.log(`A resto da divisão dos números é ${numero1 % numero2}`);
console.log(`O numero1 elevado à potência do numero2 é ${numero1 ** numero2}`);
~~~

Em cada uma das operações, temos um operador aritmético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto
* `**` -> exponênciação

## operadores-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a varável `numero` usando a palvra `let`, pois essa variável será **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de reatribuição.

~~~js
console.log(`O número incialmente igual a ${numero}`);
console.log(`Após atribuir somando o número 10: ${numero +=10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -=10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *=10}`);
console.log(`Reatribuindo e dividindo 5: ${numero /=5}`);
console.log(`${numero = numero % 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`);
console.log(`O número final é igual a ${numero}`);
console.log(`Incrementando o número em 1: ${++ numero}`);
console.log(`Decrementando o número em 1: ${-- numero}`);
console.log(`O número final é igual a ${numero}`);
~~~

Operadores de atribuição:

* `+=` -> atribuição com soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementado). Ex: `numero ++` (pós-incremento) ou `++ numero` (pré-incremento).
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decrementado). Ex: `numero --` (pós-decremento) ou `-- numero` (pré-decremento).

## operadore-comparacao.js

Neste arquivo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

~~~js
if (condicao) {
        console.log(`VERDADEIRA`);
} else {
    console.log(`FALSO`)
}
~~~

Esta estrutura exibe no console se a condição testada é `true` (verdadeira) ou `false` (falsa). A condição armazena o resultado da **comparação entre duas variáveis**, como segue:

~~~js
const a = `a`, b = `A`;
const condicao = a == b;
~~~

Operadores de comparação:

* `==` -> é igual
* `===` -> é estritamente igual *(valor e tipo)*
* `!==` -> _não_ é estritamente igual *(valor e tipo)*
* `!=` -> não é igual
* `>` -> maior que
* `<` -> menor que
* `>=` -> maior ou igual
* `<=` -> menor ou igual

## desafio1.js

// Escreva um código em JavaScript que resolva o problema descritono livro  Lógica de Programação I, p. 20, em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas, você pode defini-las com variáveis.
// Você precisará uma estrutura de decisão composta, como a seguir:

if (condicao1){
    código da condicao1
} else if (condicao2){
    código da condicao2
} else {
    código se numa das condições for verdadeira
}

## desafio2.js

Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa.

Orientações:

* Utilize o método `prompt()` do objeto `window` para realizar a leitura dos dados de entrada.
* Utilize a fórmula **IMC = peso / altura²** para calcular o IMC.
* Utilize a estrutura **if-else** para classificar o IMC de acordo com a tabela da OMS:

IMC | Indicação
---|---------
Abaixo de 18,5	| Abaixo do peso
18,5 - 24,9	| Peso normal
25,0 - 29,9	| Sobrepeso
30,0 - 34,9	| Obesidade grau I
35,0 - 39,9	| Obesidade grau II
Acima de 40,0 |	Obesidade grau III

Observações:

O IMC é apenas uma medida geral e não leva em consideração a composição corporal (músculos versus gordura). Pessoas com muita massa muscular podem ter um IMC alto, mesmo que não sejam obesas. É importante consultar um médico ou nutricionista para uma avaliação individualizada.

Para mais informações:

Organização Mundial da Saúde (OMS): <https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight>

### desafio3.js

Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida e a escala para o qual o valor deve ser convertido.

Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

Saída (1): valor convertido e escala de conversão.

### Fórmulas:

De | Para | Fórmula
-- | ---- | -------
Celsius | Fahrenheit | tF = (tºC * 9/5) + 32;
Celsius | Kelvin | tK = tC + 273.15;
Fahrenheit | Celsius | tC = (tºF - 32) * 5/9;
Fahrenheit | Kelvin | tK = (tF + 459.67) * 5/9;
Kelvin | Celsius | tC = tK + 273.15;
Kelvin | Fahrenheit | tF = (tF - 273.15) * 9/5 + 32

### Problema adicional

Como executar dois "programas" na mesma página?

### desafio4.js

Desenvolva o programa do desafio 3 em uma página HTML, obtendo os dados a partir de um formulário e exibindo o resultado na mesma página.

* Utilize uma Tag `<input>` para obter a temperatura;
* Utilize tags `<select>` para selecionar as escalas atuais e de conversão;
* Utilize um botão para calcular a temperatura;
* Apresente o resultado logo abaixo do formulário.


**Array** é um conjunto de dados englobados em uma variável. Link de informações. Usado em [] 