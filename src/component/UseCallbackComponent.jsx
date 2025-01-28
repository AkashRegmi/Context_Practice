import React from 'react'

const UseCallbackComponent = React.memo(
    (props) => {
    console.log('rerendered again');
  return (
    <div>
      <button onClick={props.handleIncrement}>{props.buttonname}</button>
    </div>
  )
}
)
///React.memo  wrap  component   component rerender taba huncha jaba props change huncha natra rerender hunna.

//if we are sending the function , then React.memo wont be able to save us from the rerendering.
export default UseCallbackComponent
