import './App.css';
import Banner from './components/Banner/Banner';
import Forms from './components/Forms/Forms';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <div className="form">
        <Forms
          labelsinput="Nome,Cargo,Imagem" placeholderinput="digite seu nome,digite seu cargo,digite o url da imagem"
          labeldrop="Time" optionsdrop={["", "Aluno", "Professor", "Coordenador", "Administrativo"]}
          btntext="enviar" btnid="1" btnonclick="alert(teste)"/>
      </div>
    </div>
    
  );
}

export default App;
