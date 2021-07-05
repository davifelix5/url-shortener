# URL-Shortener

<div align="center">
<img alt="Página inicial" src="https://github.com/davifelix5/url-shortener/blob/main/github-assets/home.jpeg" width="250" />
</div>

## O que é

- Esse aplicativo serve para encurtar os links muito grandes, promovendo **maior conforto** tanto para quem os envia quanto para quem os recebe.
- Os links encurtados são salvos na memória do celular e podem ser **acessados**, **compartilhados** ou **apagados**.

## Tecnologias utilizadas

- React Native
- Expo
- Bitly API

## Como rodar

- Instalar o NodeJS (consultar o [site oficial](https://nodejs.org/en/download/))

- Instalar o [Expo](https://docs.expo.io/get-started/installation/)

  ```bash
  npm install --global expo-cli
  ```
  ou, se você tem o ```yarn``` instalado:
  ```bash
  yarn global add expo-cli
  ```

- Criar uma conta no [site da Bitly](https://dev.bitly.com/) e [obter uma chave](https://bitly.com/pages/pricing) para o uso da 
API (navegar até a parte de uso gratuito um pouco abaixo)

- Clonar o projeto deste repositório

  ```bash
  git clone https://github.com/davifelix5/url-shortener.git
  ```

- Instalar os pacotes necessários
  ```bash
  npm install
  ```
  ou
  ```bash
  yarn install
  ```
- Criar um arquivo ```config.json``` na raiz do projeto e adicionar nele:

  ```json

  {
    "bitlyKey": "[SUA_BITLY_KEY]"
  }

  ```

- Rodar o projeto

  ```bash
  expo start
  ```

- Para rodar o aplicativo, basta instalar o **app do Expo** pela sua loja de aplicativos e depois **scanear o QRCode** fornecido pelo Expo quando a aplicação é
iniciada.
 
## O App

### Página para encurtar links
<div align="center">
<img alt="Página inicial" src="https://github.com/davifelix5/url-shortener/blob/main/github-assets/home.jpeg" width="250" />
</div>

### Página para acessar links encurtados

<div style="display: flex;" align="center">
<img alt="Links salvos" src="https://github.com/davifelix5/url-shortener/blob/main/github-assets/links.jpeg" width="250" />
<img alt="Links salvos com botão para apagar" src="https://github.com/davifelix5/url-shortener/blob/main/github-assets/links_remove.jpeg" width="250"/>
</div>

### Modal para copiar ou compartilhar links

<div align="center">
<img alt="Modal para links" src="https://github.com/davifelix5/url-shortener/blob/main/github-assets/modal.jpeg" width="250" />
</div>

