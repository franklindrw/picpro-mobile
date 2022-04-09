![capa](https://user-images.githubusercontent.com/81038899/160187381-d786345e-6526-447e-b16b-f239fd7ea93a.png)

<br /><br />

<h1 align="center"> Picpro Mobile 2022</h1>
<h4 align="center">Aplicativo Mobile feito com base no projeto da Kenzie em parceria com a Picpay. Aplicativo híbrido com Ionic e React</h4>
<br />

<div id="statusProject" align="center">
<img src="https://img.shields.io/github/license/franklindrw/picpro-mobile.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/stars/franklindrw/picpro-mobile.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/forks/franklindrw/picpro-mobile.svg?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/franklindrw/picpro-mobile.svg?style=for-the-badge" />
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
</div>

<br /><br />

## 🧭 Índice

-   [Sobre o Projeto](#-sobre-o-projeto)
    -   [Ideia do projeto](#ideia-do-projeto)
    -   [Como foi criado](#como-foi-criado)
    -   [Linguagens Usadas](#-construido-com)
    -   [Imagens do Projeto](#imagens-do-projeto)
-   [Instalação](#-instalação)
    -   [Requisitos](#requisitos)
    -   [Instalar a aplicação](#instalar-aplica%C3%A7%C3%A3o)
-   [Como usar](#%EF%B8%8F-como-usar)
-   [Autor](#-autor)
-   [Licença](#-licença)

<br /><br />

## 🔎 Sobre o Projeto

### Ideia do Projeto

Aplicação feita com base no curso Picpro 2022. A idéia proposta nas aulas era recriar a interface do aplicativo do PicPay em HTML,CSS e JS. Então utilizei a ideia para evoluir o projeto e recria-lo usando o Ionic e React.

### Como foi criado

Com Ionic é possível criar aplicativos Híbridos que, com o mesmo código atenda smartphones IOS e Android, e com o framework React foi possível componentizar e renderizar de forma simples.

Foi usado Styled-Components para criar e gerenciar toda as estilizações dos componentes, ele é uma biblioteca que cria classes quando renderizado. Assim não é preciso se preocupar com os nomes das classes quando é feito a estilização dos componentes, já que ele faz o gerenciamento de classes impedindo de um css sobrescreva css de outros componentes.

Nesse projeto foi usado também o Hook useStade que permite adicionar o state do React a um componente de função. Então quando o card é clicado o use State é chamado e alterado para chamar o componente correspondente. E para mudar o botão quando acionado para branco é usado o props para enviar a informação para o arquivo de estilização e mudar para a cor para "ativo".

### Imagens do Projeto
<div align="center">
  <img src="https://user-images.githubusercontent.com/81038899/162595001-801ec786-81a2-45c8-aa09-2ca2ec4bf3fe.gif" />
  <img style="width: 347px" src="https://user-images.githubusercontent.com/81038899/162595006-9877a38c-496e-496e-8b70-ce0c0399a86c.png" />
  <img style="width: 347px" src="https://user-images.githubusercontent.com/81038899/162595008-a5fdfd2e-3ff3-4af9-8aeb-40d1280b670f.png" />
  <img style="width: 347px" src="https://user-images.githubusercontent.com/81038899/162595011-c816c031-cb2e-4b6f-b3ae-4cfdf2d4186f.png" />
  <img style="width: 347px" src="https://user-images.githubusercontent.com/81038899/162595014-7f5ad7c7-22f7-42d7-8cc2-7ef2038d99cb.png" />
  <img style="width: 347px" src="https://user-images.githubusercontent.com/81038899/162595015-3a0e7283-ee31-4865-9d5c-2ea032502427.png" />
</div>

<br /><br />

## 🔨 Construido com

<div id="statusProject" align="left">
    <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

</div>

<br /><br />

## 📥 Instalação

### Requisitos

-   É preciso ter instalado NodeJS, acesse o site para instalar <a href="https://nodejs.org/pt-br/download/">Clicando aqui</a>

-   Instale o Ionic pelo terminal usando o comando abaixo:

```
npm install -g @ionic/cli
```

### Instalar Aplicação

1.  Clone o repositório

2.  Navegue até a pasta clonada

3.  Abra o terminal e digite o comando para instalar as dependências do package.json

```
npm install
```

<br /><br />

## ▶️ Como usar

Para iniciar o servidor Ionic digite no terminal

```
ionic serve
```

<br /><br />

## 🖊 Autor

<a href="https://github.com/franklindrw">
<img style="border-radius: 50%; width: 100px" src="https://github.com/franklindrw.png" alt="Foto do Autor"/>
<br />
<sub><b>Franklin Campos</b></sub>
</a>
</br>
<p>Feito por <strong>Franklin Campos</strong> 👋🏻 </br>
Entre em contato!</p>

<div>
<a href="https://www.linkedin.com/in/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="mailto:franklindrw@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.instagram.com/franklindrw" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>

<br /><br />

## 📋 Licença

<p> Copyright 2022 © Franklin Campos </br>
This project is MIT licensed.</p>
