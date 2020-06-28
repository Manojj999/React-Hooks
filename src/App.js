import React from 'react';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
    </div>
  );
}

export default App;
