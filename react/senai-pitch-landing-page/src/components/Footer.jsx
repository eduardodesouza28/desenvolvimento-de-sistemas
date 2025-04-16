import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="container">
        <p>© {currentYear} Técnico em Desenvolvimento de Sistemas - SENAI São José. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;