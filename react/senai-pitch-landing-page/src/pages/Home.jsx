import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <section id="home-intro">
        <h1>flappy bird protótipo</h1>
        <h2>Seu Slogan ou Frase de Impacto Aqui!</h2>
        <p>Uma breve descrição que convida o usuário a conhecer mais sobre a solução inovadora desenvolvida no Mundo SENAI.</p>


        <img src="src/assets/flappy.png" alt="Banner do Projeto" className="responsive banner" />

        <Link to="/projeto" className="btn">Saiba Mais Sobre o Projeto</Link>
      </section>
    </div>
  );
}

export default Home;