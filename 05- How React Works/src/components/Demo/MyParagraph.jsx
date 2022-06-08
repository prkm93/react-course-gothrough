import React from 'react'

// Since its parent component is wrapped in memo and if parent component changes, then only this component is re-executed
const MyParagraph = (props) => {

  console.log("MyParagraph running");

  return (
    <p>{props.children}</p>
  )
}

export default MyParagraph