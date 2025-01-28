// import { useState } from "react";
// import "./App.css";
// import { ThemeContext } from "./component/ThemeContext";
// import Theme from "./Theme";

// function App() {
//   const [theme,setTheme]=useState("Red");

//   return <>
//   <ThemeContext.Provider value={{theme,setTheme}}>
//   <Theme/>
//   </ThemeContext.Provider>
//   </>;
// }

// export default App;
// import React from "react";
// import { NotificationProvider } from "./component/NotificationContext";
// import NotificationsPanel from "./component/NotificationsPanel";

// function App() {
//   return (
//     <NotificationProvider>
//       <div style={{ padding: "20px" }}>
//         <h1>React Notification System</h1>
//         <NotificationsPanel />
//       </div>
//     </NotificationProvider>
//   );
// }

// export default App;

import React, { useCallback, useRef, useState} from 'react';

import Counter from './component/UseReducer';
import UseCallbackComponent from './component/UseCallbackComponent';


function App() {
  const [state,setState]=useState(0)
  const handleIncrement=useCallback(()=>{
    setState(state+1 )
  },[state]);
  return (
    <>
    <div> COUNT: {state}</div> <br/>
    <button onClick={handleIncrement}>Increment</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <UseCallbackComponent buttonname="click me2"
    handleIncrement={handleIncrement}/>
    
    </>
  );
}

export default App;
