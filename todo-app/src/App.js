import React, { useState } from 'react'
import Header from './components/Header'
import './App.css';

function App() {
  const [mode, setMode] = useState('dark');

  return (
    <div className={`App ${mode}`}>
      <Header
        mode={mode}
        toggleTheme={() => {
          setMode(currentMode => currentMode === 'dark' ? 'light' : 'dark');
        }}
      />
      <p>
        holi
      </p>
    </div>
  );
}

export default App;



