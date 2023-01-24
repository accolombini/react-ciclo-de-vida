import React from 'react';
import logo from './logo.svg';
import './App.css';

// Importando o componente
import MeuComponente from './components/MeuComponente';

// Título será uma propriedade ...
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <MeuComponente titulo="Olá mundo!!"/>
      </header>
    </div>
  );
}

export default App;
