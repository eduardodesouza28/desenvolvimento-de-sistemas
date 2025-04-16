import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <section id="home-intro">
        <h1>flappy bird protótipo</h1>
        <h2>Viciante como o original, desafiador como nunca!</h2>
        <p>uma cópia do famoso jogo "Flappy Bird" apenas para fins de estudo</p>


        {/* <img src="src/assets/flappy.png" alt="Banner do Projeto" className="responsive banner" /> */}

        <Link to="/projeto" className="btn">Saiba Mais Sobre o Projeto</Link>
      </section>
    </div>
  );
}

export default Home;