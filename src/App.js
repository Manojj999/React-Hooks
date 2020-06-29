import React from 'react';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import './App.css';
import HookCounterTwo from './components/HookCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';
import HookCounterArray from './components/HookCounterArray';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <HookCounter />
      <HookCounterTwo />
      <HooksCounterThree /> */}
      <HookCounterArray/>
    </div>
  );
}

export default App;
