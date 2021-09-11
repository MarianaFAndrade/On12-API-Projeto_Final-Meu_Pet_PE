<p align="center">
  <a>
    <a href="https://on12-api-final-meu-pet-pe.herokuapp.com/"><img src="https://img.shields.io/badge/deploy-heroku.com-blue">
    <a href="https://www.mongodb.com/cloud/atlas"><img src="https://img.shields.io/badge/database-mongodb.com-blue">
    <a href="https://nodejs.org/pt-br/"><img src="https://img.shields.io/badge/node-v12.18.3-blue">
  </a>
</p>

![MEU-PET-PE](https://github.com/MarianaFAndrade/On12-API-Projeto_Final-Meu_Pet_PE/blob/main/docs/images/5466091.png)

> API Rest de adoção de animais Recife-PE.

## **Sumário**

- [Apresentação](#apresentação)
- [Funcionalidades](#funcionalidades)
- [Dependências, tecnologias e bibliotecas](#dependências-tecnologias-e-bibliotecas)
- [Instruções para instalação](#instruções-para-instalação)
- [Rotas](#rotas)

## **Apresentação**

De acordo com estudos, após a disseminação da pandemia do Covid-19, as pessoas se tornaram mais solitárias no mundo, assim como também o número de animais abandonados cresceu em muitas partes do mundo.
Para minimizar o impacto dos animais nas ruas e ajudar na diminuição da população de animais em abrigos e nas ruas, além de ajudar pessoas que precisam de afeto e de companhia, eu criei o “Meu PET PE” uma API voltada para o encontro entre animais abandonados que se encontram em Lares Temporários ou Abrigos com seus novos Tutores.

## **Funcionalidades**

- [X] Cadastro de Animais, de Tutores e Abrigos na aplicação
- [X] Lista de todos os Animais, Tutores e Abrigos cadastrados
- [X] Busca de Animais que estão acolhidos, por abirgo
- [X] Busca de Animais, Abrigos e tutores por ID
- [X] Busca de Animais e Abrigos por bairro
- [X] Atualização de cadastro de Animais, Abrigos e Tutores
- [X] Remoção dos cadastros dos Animais, Abrigos e Tutores

## **Dependências, tecnologias e bibliotecas**

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img src="https://img.shields.io/badge/Git/GitHub-blue">
    <a href="https://nodejs.org/pt-br/"><img src="https://img.shields.io/badge/NodeJS-blue">
    <a href="https://www.mongodb.com/cloud/atlas"><img src="https://img.shields.io/badge/MongoDB%20Atlas-blue">
    <a href="https://herokuapp.com/"><img src="https://img.shields.io/badge/Heroku-blue">
    <br/>
    <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-6.14.6-lightblue">
    <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.17.1-lightblue">
    <a href="https://mongoosejs.com/"><img src="https://img.shields.io/badge/mongoose-5.10.17-lightblue">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img src="https://img.shields.io/badge/dotenv-8.2.0-lightblue">
    <a href="https://www.npmjs.com/package/nodemon"><img src="https://img.shields.io/badge/nodemon-2.0.6-lightblue">
  </a> 
</p>

## **Instruções para instalação**

- Instale as dependências necessárias para a execução da API através do `npm install`

- Na raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados).

- Para executar a API, utilize o comando `npm start`


## **Rotas e descrições**

Esta API é escutada na `porta 8080` e para todas as rotas serem acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.

### _Rotas para os Animais_

| Descrição | Método | Rota |
|---------|--------|------|
| Cadastro de animais disponíveis para adoção | POST | `/animals/create` |
| Lista todos os animais cadastrados | GET | `/animals/allAnimals` |
| Busca todos os animais por bairro | GET | `/animals/bairro` |
| Busca animais pelo ID | GET | `/animals/:id` |
| Busca os animais de um determinado abrigo por ID | GET | `/animals/shelter/:id` |
| Faz o update de qualquer informação do animal por ID | PATCH | `/animals/update/:id` |
| Deleta um animal selecionado por ID | DELETE | `/animals/delete/:id` |


### _Rotas para os Abrigos_

| Descrição | Método | Rota |
|---------|--------|------|
| Cadastro de abrigos/LTs | POST | `/shelters/create` |
| Lista todos os abrigos/LTs cadastrados | GET | `/shelters/allShelters` |
| Busca todos os abrigos/LTs por bairro | GET | `/shelters/bairro` |
| Busca abrigos/LTs pelo ID | GET | `/shelters/:id` |
| Faz o update de qualquer informação do abrigo/LT por ID | PATCH | `/shelters/update/:id` |
| Deleta um abrigo/LT selecionado por ID | DELETE | `/shelters/delete/:id` |

### _Rotas para os Tutores_

| Descrição | Método | Rota |
|---------|--------|------|
| Cadastro dos Tutores | POST | `/tutor/create` |
| Lista todos os Tutores cadastrados | GET | `/tutor/allTutors` |
| Busca Tutores pelo ID | GET | `/tutor/:id` |
| Faz o update de qualquer informação dos tutores por ID | PATCH | `/tutor/update/:id` |
| Deleta um tutor selecionado por ID | DELETE | `/tutor/delete/:id` |


[![Linkedin Badge](https://img.shields.io/badge/-Mariana%20Andrade-lightblue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/mariana-andrade-4a71b8148/)
