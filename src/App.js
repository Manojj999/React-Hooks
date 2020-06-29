import React from 'react';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import './App.css';
import HookCounterTwo from './components/HookCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';

function App() {
  return (
    <div className="App">
      <Counter />
      <HookCounter />
      <HookCounterTwo />
      <HooksCounterThree />
    </div>
  );
}

export default App;
