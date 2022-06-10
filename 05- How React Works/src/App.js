import React, { useState, useCallback, useMemo } from 'react';
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import DemoList from './components/Demo/DemoList';


/**
 * 
 * Whenever state, props or context changes, the component is rerendered.

Re-evaluating components !== re-rendering DOM.

Component is re-evaluated whenever props, state or context changes.

DOM is only updated at places where it needs to be changed based on differences between react derived based on previous state of component and its tree and current state after state, props or context changes. So, real DOM doesn’t change every time,  it’s only changed when needed. So, React does virtual comparisons with virtual DOM and then passes only the changes from last snapshot and current snapshot to real DOM. It does using diffing,finding difference between two snapshots.

Component evaluation and component rendering are different things. Any console.log statements in component will always be re-executed/re-evaluated when state changes , but not necessary all the DOM elements are painted again.Only the DOM element which is affected by state change , will be rendered or updated.

DOM element which is updated or added  is flashed in console elements tab.

 */


/**
 * 
 * useCallback - this hook basically saves the function across component execution and ensures function shouldn’t be created with every execution. 
In our case, it’s being used in conjunction with memo    and here.
The “Button Running” isn’t executed every time a button is clicked because toggleParagraphHandler function is wrapped in useCallback and every time its new instance isn’t created on button click and remains the same.

If we aren’t passing any dependency parameter in useCallback , then after allowToggle is changed, and component is re-executed, toggleParagraphHandler isn’t created again , so it still uses the old value of allowToggle , and not the updated value because value of allowToggle is assigned first time, when the function(toggleParagraphHandler) is created.

When dependency parameter is passed, useCallback will recreate the function only when parameter is changed.

 */
function App() {

  const [togglePara, setTogglePara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  console.log("App running");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setTogglePara(prevState  => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(prevState => !prevState);
  }

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* <DemoOutput  show={togglePara}/> */}
      <DemoList items={useMemo(() => [1,6,3,8,2,9], [])} title={listTitle}/>
      {/* <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Add paragraph</Button> */}
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
