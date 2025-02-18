// import Image from "next/image";
import Head from 'next/head';
import { Grommet } from 'grommet';
import CarouselComponent from './components';
import styles from "./style.modules.css"

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export default function Home() {
  return (
    <html lang="pt/br">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="style.modules.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
        <title>site portifolio</title>
      </head>
      <body class="bgDark">
        <header class="bgDark">
          <div class="container p-4">
            <div class="header">
              <div class="row justify-content-md-center">
                <a class="col col-md-auto nounderline" href="https://github.com/eduardodesouza28" target="_blank"><img src="/github-mark-white.svg" alt="github icon" width={25}></img></a>
                <a class="col col-md-auto nounderline" href="#">sobre mim</a>
                <a class="col col-md-auto nounderline" href="#">projetos</a>
              </div>
            </div>
          </div>
        </header>

        <div class="container">
          <div class="absolute top-9 right-0 w-100 h-350 ">
            <svg class="w-full h-full" viewBox="-250 -10 245 200" preserveAspectRatio="none">
              <polygon points="0,0 -125,50 0,100" fill="none" stroke="#679FBC" stroke-width="3" />
              <polygon class="topacidade" points="0,1.5 -100 ,50 3,100" fill="none" stroke="#679FBC" stroke-width="3" />
            </svg>
          </div>
          <div>
            <h1 class="cor1 mt-10">Eduardo de Souza</h1>
            <h1 class="cor2 mb-10">Programador Full-stack</h1>
          </div>
          <CarouselComponent />

        </div>
      </body>
    </html>
  );
}
