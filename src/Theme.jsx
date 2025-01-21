import React, { useContext } from 'react'
import { ThemeContext } from './component/ThemeContext'

function Theme() {
    const{theme,setTheme}=useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme==="red"?"yellow":"red",color: theme === "red" ? "#000" : "#fff"}}>
    <p>The current theme is {theme}</p>
    <button onClick={() => setTheme(theme === "red" ? "yellow" : "red")}>
      Toggle Theme
    </button>
    </div>
  )
}

export default Theme
