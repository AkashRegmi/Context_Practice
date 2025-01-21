import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./component/ThemeContext";
import Theme from "./Theme";

function App() {
  const [theme,setTheme]=useState("Red");

  return <>
  <ThemeContext.Provider value={{theme,setTheme}}>
  <Theme/>
  </ThemeContext.Provider>
  </>;
}

export default App;
