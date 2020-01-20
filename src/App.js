import React from 'react';
import './App.css';
import Header from './Components/Header'
import './Components/Header.css'
import Calculator from './Components/Calculator'
import './Components/Calculator.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


function App() {
  return (
    <>
      <div className="AppHead">
        <Header />
      </div>
      <div className="App">
        <Calculator />
      </div>
    </>

  );
}

export default App;
