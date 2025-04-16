
import React from 'react';

function Contato() {
  return (
    <div className="container">
      <section id="contact-info">
        <h2>Entre em Contato</h2>
        <p>
          Gostou do projeto? Quer saber mais ou tem alguma sugestão?  
        </p>

        <h3>E-mail Institucional / Grupo:</h3>
        <p>
          <a href="mailto:eduardo_souza28@estudante.sesisenai.org.br">eduardo_souza28@estudante.sesisenai.org.br</a> {/* Replace with actual email */}
        </p>

        <h3>Redes Sociais:</h3>
        <ul>
          <li><a href="https://github.com/eduardodesouza28" target="_blank" rel="noopener noreferrer">github</a></li>
          {/* Add more links */}
        </ul>

        {/* --- Simple Form Placeholder (Optional - More complex with useState/submission) ---
        <h3>Ou envie uma mensagem:</h3>
        <form className="contact-form">
            Basic form structure, no functionality yet
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensagem</button>
        </form>
         */}
      </section>
    </div>
  );
}

export default Contato;