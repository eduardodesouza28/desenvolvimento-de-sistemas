import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projeto from './pages/Projeto';
import Contato from './pages/Contato';

function App() {
  return (
    <> {/* Use Fragment shorthand */}
      <Header />
      <main> {/* Wrap page content in main */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/contato" element={<Contato />} />
          {/* Optional: Add a 404 Not Found Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;