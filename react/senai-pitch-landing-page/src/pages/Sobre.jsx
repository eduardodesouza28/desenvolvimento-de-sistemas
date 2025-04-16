import React from 'react';

function Sobre() {
  return (
    <div className="container">
      <section id="about-team">
        <h2>Quem Desenvolveu</h2>
        <p>
          Este projeto foi desenvolvido pelo aluno do curso Técnico em Desenvolvimento de Sistemas da turma vespertino da unidade SENAI de São José como forma de estudo.
        </p>
        <ul>
          <li>Eduardo de Souza</li>
          {/* Add more team members */}
        </ul>
      </section>

      <section id="about-motivation">
        <h2>Por Que Criamos Este Projeto?</h2>
        <p>
          O objetivo deste projeto é desenvolver um jogo simples e divertido, inspirado no clássico "Flappy Bird", utilizando a biblioteca React. A ideia é proporcionar uma experiência de aprendizado prática para os alunos do curso Técnico em Desenvolvimento de Sistemas, permitindo que eles apliquem seus conhecimentos em programação e design de jogos.
        </p>
      </section>

      <section id="about-tech">
        <h2>Tecnologias Utilizadas</h2>
        <p>Para dar vida a este projeto, utilizamos um conjunto de tecnologias modernas e eficientes:</p>
        <ul>
          <li>html,css,js</li>
        </ul>
      </section>
    </div>
  );
}

export default Sobre;