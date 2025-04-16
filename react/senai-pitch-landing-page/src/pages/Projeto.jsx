import React, { useState } from 'react';

function Projeto() {
  const [showDetalhesTecnicos, setShowDetalhesTecnicos] = useState(false);
  const [showCapturasTela, setShowCapturasTela] = useState(false);

  return (
    <div className="container">
      <section id="project-pitch">
        <h2>Sobre o Jogo</h2>
        <h3>Conceito do Jogo</h3>
        <p>
          Este projeto é um jogo desenvolvido como parte do curso de Desenvolvimento de Sistemas.
          O jogo apresenta mecânicas simples mas envolventes, criado para demonstrar conceitos
          fundamentais de programação e desenvolvimento de jogos.
        </p>

        <h3>Objetivo do Projeto</h3>
        <p>
          O principal objetivo era criar uma experiência lúdica que servisse como ferramenta de
          aprendizado tanto para o desenvolvimento quanto para os jogadores, abordando conceitos
          como colisão, pontuação, vidas e progressão de nível.
        </p>

        <h3>Diferenciais</h3>
        <p>
          Apesar de ser um projeto acadêmico, o jogo incorpora elementos como:
          <ul>
            <li>Sistema de pontuação progressiva</li>
            <li>Mecânicas de dificuldade escalável</li>
            <li>Interface simples e intuitiva</li>
            <li>Código modular para fácil expansão</li>
          </ul>
        </p>
      </section>

      <section id="project-prototype">
        <h2>Demonstração do Jogo</h2>
        <p>Confira algumas imagens e detalhes do jogo em funcionamento:</p>

        <button className="btn" onClick={() => setShowCapturasTela(!showCapturasTela)}>
          {showCapturasTela ? 'Ocultar Capturas de Tela' : 'Mostrar Capturas de Tela'}
        </button>

        {showCapturasTela && (
          <div className="toggle-content">
            <div className="screenshots">
              <img src="src/assets/flappy.png" alt="Tela inicial do jogo" className="responsive" />
              {/* <img src="https://raw.githubusercontent.com/eduardodesouza28/desenvolvimento-de-sistemas/main/jogo_teste/screenshot2.png" alt="Jogabilidade" className="responsive" /> */}
            </div>
            <p>As imagens acima mostram a interface do jogo e a jogabilidade em ação.</p>
          </div>
        )}

        <h3>Como Jogar</h3>
        <p>
          [Inserir aqui as instruções básicas de como jogar, controles, objetivos etc.]
          Exemplo: Use as setas do teclado para mover o personagem e evite os obstáculos enquanto coleta os itens para pontuar.
        </p>
      </section>

      <section id="project-technology">
        <h2>Tecnologias Utilizadas</h2>

        <button className="btn" onClick={() => setShowDetalhesTecnicos(!showDetalhesTecnicos)}>
          {showDetalhesTecnicos ? 'Ocultar Detalhes Técnicos' : 'Mostrar Detalhes Técnicos'}
        </button>

        {showDetalhesTecnicos && (
          <div className="toggle-content">
            <h3>Stack Tecnológico</h3>
            <ul>
              <li><strong>Linguagem:</strong> JavaScript (ou outra linguagem utilizada)</li>
              <li><strong>Controle de Versão:</strong> Git/GitHub</li>
              <li><strong>Assets:</strong> imagens do jogo Flappy Bird</li>
            </ul>

            <h3>Estrutura do Código</h3>
            <p>
              O projeto está organizado em [descrever a estrutura de pastas e arquivos principais].
              Os principais componentes incluem [mencionar arquivos/chaves do projeto].
            </p>
          </div>
        )}
      </section>

      <section id="project-resources">
        <h2>Acesso ao Projeto</h2>
        <p>
          O código-fonte completo está disponível no GitHub para consulta, contribuição ou uso educacional.
          <br />
          <a href="https://github.com/eduardodesouza28/desenvolvimento-de-sistemas/tree/main/jogo_teste"
            target="_blank"
            rel="noopener noreferrer"
            className="btn">
            Acessar Repositório no GitHub
          </a>
        </p>

        <h3>Executando o Jogo</h3>
        <p>
          Para executar o jogo localmente:
          <ol>
            <li>Clone o repositório</li>
            <li>Abra o arquivo index.html em seu navegador</li>
            <li>Ou siga as instruções específicas do README.md</li>
          </ol>
        </p>
      </section>
    </div>
  );
}

export default Projeto;