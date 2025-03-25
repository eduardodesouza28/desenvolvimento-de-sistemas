import './App.css';
import Banner from './components/Banner/Banner';
// import Inputs from './components/inputs/inputs';
import Forms from './components/Forms/Forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <div className="inputs">
          <Forms labels="Nome,Cargo,Imagem" placehr="digite seu nome,digite seu cargo,digite o url da imagem"  />
        </div>
      </header>
    </div>
  );
}

export default App;
