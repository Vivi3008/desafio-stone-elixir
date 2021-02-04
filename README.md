# Desafio programa de formação em Elixir - Stone

Teste técnico feito para participar do processo seletivo da Stone.

## Informações sobre o desafio

Criar uma função que:
- Calcular o valor de cada item e multiplicando o preço pela quantidade e somar todos os itens.
- Dividir o valor de forma igual entre a quantidade de emails.
- Retornar um mapa onde a chave será o email e o valor que ele deve pagar nessa conta.

## Resolução

1. Definir os tipos dos parametros que a função iria receber. No caso uma lista de produtos(nome, qtd e preço) em forma de array. E o tipo do email foi definido como array de string.

2. Criar a função que calcula o valor total dos itens recebidos e dividir esse valor pela quantidade de emails sendo que:
- Os valores são tratados como inteiros, e o valor da divisão deverá ter 2 casas decimais se for preciso.
- No caso de dízima periodica, calcular o resto da divisão e distribuir o resto pelos ultimos emails.
- A função retorna um ojeto do tipo map com a chave que será o email e o valor que este deverá pagar.

3 - Criar uma função que gera uma lista de produtos onde a quantidade de lista pode ser alterada em uma variavel.

4. Criar uma função que gera uma lista de emails.

5. Criar uma constante do tipo map que recebe a função calcular e joga como parametros a função geraLista e a função gera emails.

## Execução

Para executar é preciso ter a ultima versão do node instalada.
Faça o clone desse repositório e execute o comando: 
```
npm install
```

Execute a aplicação no terminal pelo comando:
```
yarn run dev
```

## Linguagem Utilizada

- Typescript
- Ts-node-dev (lib para rodar arquivos ts no node)