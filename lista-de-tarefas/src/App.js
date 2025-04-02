import './App.css'
import Forms from "./components/Forms/forms";

function App() {
  return (
    <div className="App">
      <Forms
        labelsinput="Nome,Descricao" placeholderinput="Insira o nome da tarefa, Insira a descrição da tarefa"
        btntext="enviar" btnid="1" />
    </div>
  );
}

export default App;
