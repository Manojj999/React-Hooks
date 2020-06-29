import React from 'react';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import './App.css';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
      <HookCounterTwo />
    </div>
  );
}

export default App;
