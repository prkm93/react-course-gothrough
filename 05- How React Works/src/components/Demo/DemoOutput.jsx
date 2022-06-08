import React from 'react'
import MyParagraph from './MyParagraph';

/**
 * 
 * Even if a child component is used, not the whole content of the child component is re-rendered. 
   If the state is managed in parent component, then both parent and child component are re-evaluated again.
   If a  static value is passed to Child component as props, still the child comp is re-executed though the props doesn’t change. This is because Child comp is returned from Parent comp and this is like function call with respect to component functions. Since the parent comp is ran again, hence the child component is also re-executed.
   Changes in props might lead to change in DOM, but for comp to be re-evaluated,  its enough that parent component was re-evaluated.
 * 
 */
function DemoOutput(props) {

  console.log("DEMO output running");

  return (
    <MyParagraph>{props.show ? 'This is new paragraph' : ''}</MyParagraph>
  )
}

export default React.memo(DemoOutput);