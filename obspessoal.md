# Aula 36

## Algumas informações

- A tag `<input>` não possui tag de fechamento uma vez que ela não precise de conteúdo apenas recebê-lo.

# Glossário de algumas TAGs

### CSS
- ´font-size´ => estabelece o tamanho da fonte;

Para identificar um `id` no `CSS` usamos o `#Nome_escolhido` e para identificar uma `Class`usamos o `.Nome_escolhido`.

`<div>` -> utilizamos para dar semântica.

`:root` -> estamos chamando o HTML.

`width` -> determina a largura da área de conteúdo de um elemento.

`padding` -> define uma a distância entre o conteúdo de um elemento e suas bordas. É um atalho que evita definir uma distância para cada lado separadamente.

### Glossário 

Array `[]` => agrupa um conjunto de informações.

EXEMPLO:

~~~HTML
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>
    <script>
        let carros = ["Ford", "VW", "BMW", "Fiat"];

        document.getElementById("demo").innerHTML = carros;
    </script>
</body>
</html>
~~~~

Array de string(texto)
let carros = ["Ford", "VW", "BMW", "Fiat"];

Array de números
let ano = [2020, 2021, 2022, 2023]

Alterando valor de elemento através do índice
carros [3] = "Alfa Romeo"

Acrescentar um elemento à Array
carros.push('Audi')

Acrescentar um Array dentro de outra Array
carros.push(ano)

Consulta o cumprimento da Array = propriedade 'length'

document.getElementById("demo").innerHTML = carros.length;
(OBS: Indices é o cumprimento -1, ou seja,)

Localizar elemento através do índice [número]
document.getElementById("demo").innerHTML = carros[0...3];

nomedoarray.pop () vai sempre remover o último elemento do array e vai retornar esse elemento, o que significa que eu posso capturar o elemento removido e armazenar numa variável.
(Ele joga o elemento para esquerda)

array.includes() => esse método apenas usa o bolean (traz se tem ou não o elemento, verdadeiro ou falso). Não retira ou acrescenta nenhum elemento no array.