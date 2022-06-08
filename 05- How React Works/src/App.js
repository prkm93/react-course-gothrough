import React, { useState } from 'react';
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';


/**
 * 
 * Whenever state, props or context changes, the component is rerendered.

Re-evaluating components !== re-rendering DOM.

Component is re-evaluated whenever props, state or context changes.

DOM is only updated at places where it needs to be changed based on differences between react derived based on previous state of component and its tree and current state after state, props or context changes. So, real DOM doesn’t change every time,  it’s only changed when needed. So, React does virtual comparisons with virtual DOM and then passes only the changes from last snapshot and current snapshot to real DOM. It does using diffing,finding difference between two snapshots.

Component evaluation and component rendering are different things. Any console.log statements in component will always be re-executed/re-evaluated when state changes , but not necessary all the DOM elements are painted again.Only the DOM element which is affected by state change , will be rendered or updated.

DOM element which is updated or added  is flashed in console elements tab.

 */
function App() {

  const [togglePara, setTogglePara] = useState(false);

  console.log("App running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput  show={false}/> 
      <Button onClick={() =>setTogglePara(prevState => !prevState)}>Add paragraph</Button>
    </div>
  );
}

export default App;
