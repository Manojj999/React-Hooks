import React from 'react';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import './App.css';
import HookCounterTwo from './components/HookCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';
import HookCounterArray from './components/HookCounterArray';
import HookCounterUseEffect1 from './components/HookCounterUseEffect1';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <HookCounter />
      <HookCounterTwo />
      <HooksCounterThree /> */}
      <HookCounterArray/>
      <HookCounterUseEffect1/>
    </div>
  );
}

export default App;
