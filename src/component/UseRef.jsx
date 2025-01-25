import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const bef=useRef(null);
    
    useEffect(()=>{
        console.log(bef.current);
    })
  return (
    <div>
    <p>aau</p>
    <input type="text"  ref={bef} />
      <p> hello</p>
    </div>
  )
}

export default UseRef
