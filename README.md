# Pokédex Desafio DIO 🚀

Bem-vindo à **Pokédex**, um projeto desenvolvido como parte de um desafio da [Digital Innovation One (DIO)](https://www.dio.me/). Este projeto utiliza a [PokéAPI](https://pokeapi.co/) para listar e exibir informações detalhadas sobre os Pokémon.

## 🎯 Objetivo

O principal objetivo deste projeto foi consolidar conhecimentos em:
- **HTML**, **CSS**, e **JavaScript**.
- Manipulação da **DOM**.
- Consumo de APIs REST.
- Implementação de modais para exibição de informações detalhadas.
- Estilização responsiva e dinâmica baseada em dados da API.

## 🚀 Funcionalidades

- **Listagem de Pokémon**: Mostra uma lista inicial de Pokémon com carregamento dinâmico.
- **Scroll Infinito**: Adiciona mais Pokémon à lista conforme o usuário rola a página.
- **Modal com Detalhes**: Ao clicar em um Pokémon, exibe suas informações detalhadas, como nome, número, tipos, e uma imagem oficial.
- **Estilização Dinâmica**: O modal é estilizado com base no tipo principal do Pokémon.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e responsividade.
- **JavaScript (ES6+)**: Manipulação da DOM, consumo da API e lógica do projeto.
- **PokéAPI**: API para obter informações sobre os Pokémon.

## 📦 Estrutura do Código

### Principais Arquivos:
- `index.html`: Contém a estrutura da aplicação.
- `style.css`: Estilização para a listagem e o modal.
- `script.js`: Código principal para manipulação da DOM e consumo da API.
- `poke-api.js`: Responsável por fazer as requisições à API e converter os dados para o formato utilizado no projeto.

### Fluxo do Código:
1. **Carregamento Inicial**:
   - A função `loadPokemonItens` consome a API para buscar uma quantidade limitada de Pokémon (12 por vez).
   - Os dados retornados são mapeados para HTML e exibidos na página.

2. **Scroll Infinito**:
   - Um listener no evento `scroll` carrega mais Pokémon conforme o usuário atinge o final da página.

3. **Modal Dinâmico**:
   - Um listener no evento `click` detecta quando um Pokémon é clicado, busca suas informações detalhadas e exibe no modal.
   - O modal é estilizado com base no tipo principal do Pokémon.

4. **Fechamento do Modal**:
   - Listeners no botão de fechamento e fora do modal garantem uma experiência de usuário fluida, removendo classes dinâmicas para evitar conflitos.
