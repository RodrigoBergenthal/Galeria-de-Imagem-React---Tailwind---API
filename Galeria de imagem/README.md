 # Projeto de Galeria de Imagens com React + Vite + TailwindCSS

Este projeto é uma aplicação web que consome a API [Picsum Photos](https://picsum.photos/) para exibir uma galeria de imagens. O objetivo principal do projeto é criar uma experiência de usuário amigável para visualizar e favoritar imagens, além de navegar entre diferentes páginas para ver as imagens já favoritadas.

## Sumário
1. [Descrição Geral](#descrição-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Funcionalidades Implementadas](#funcionalidades-implementadas)
5. [Como Executar o Projeto](#como-executar-o-projeto)
6. [Considerações Finais](#considerações-finais)
7. [Imagens de Demonstração](#imagens-de-demonstração)

## 1. Descrição Geral
Este projeto é uma aplicação web que permite aos usuários visualizar uma galeria de imagens, buscar por autor específico e favoritar as imagens desejadas. A aplicação foi construída utilizando React com Vite como bundler, além de utilizar TailwindCSS para estilização.

## 2. Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Bundler moderno que facilita o desenvolvimento web, proporcionando um build rápido e eficiente.
- **TailwindCSS**: Framework CSS utilitário para estilização rapida e personalização de componentes.
- **JavaScript**: Linguagem de programação utilizada para adicionar comportamento dinâmico à aplicação.
- **API Picsum Photos**: API pública que fornece imagens aleatórias para uso em projetos.

## 3. Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:
- `src/`: Diretório principal onde estão localizados os principais arquivos e componentes da aplicação.
  - `components/`: Diretório contendo todos os componentes reutilizáveis da aplicação.
    - `ImageGallery.js`: Componente principal que exibe a galeria de imagens.
    - `ImageCard.js`: Componente que representa cada card de imagem na galeria.
    - `SearchBar.js`: Componente para busca por autor ou termo específico.
  - `App.js`: Ponto de entrada da aplicação e roteamento entre componentes.
  - `main.jsx`: Configurações iniciais do React com Vite.
- `public/`: Diretório onde estão localizados os arquivos públicos (favicon, ícones, etc.).
- `tailwind.config.js`: Configurações de TailwindCSS.
- `vite.config.js`: Configurações do Vite.

## 4. Funcionalidades Implementadas
- **Exibição de Imagens**: A aplicação consome a API Picsum Photos para exibir uma lista de imagens que podem ser roladas infinitamente.
- **Busca por Autor**: Permite ao usuário buscar imagens específicas baseado no nome do autor.
- **Favoritar Imagens**: Os usuários podem favoritar qualquer imagem na galeria, e estas ficam salvas localmente no navegador usando `localStorage`.
- **Navegação entre Páginas**: Permite ao usuário navegar até uma página de favoritos que lista todas as imagens favoritadas.

## 5. Como Executar o Projeto
Para executar este projeto, siga os passos abaixo:
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Execute o projeto**:
   ```bash
   npm run dev
   ```
4. Abra seu navegador e acesse `http://localhost:3000` para ver a aplicação rodando.

## 6. Considerações Finais
Este projeto foi desenvolvido com o objetivo de aprimorar minhas habilidades em React, Vite e TailwindCSS, além de consolidar meu entendimento sobre consumo de APIs e manipulação de estado local. A aplicação ainda é um MVP (Mínimo Produto Viável) e pode ser expandida com novas funcionalidades como comentários, ranking de autores, etc.

## 7. Imagens de Demonstração
![Imagem da Galeria de Imagens](https://via.placeholder.com/150 "Galeria de Imagens")
![Página de Favoritos](https://via.placeholder.com/150 "Página de Favoritos")
