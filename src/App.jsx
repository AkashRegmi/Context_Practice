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

import React, { useRef} from 'react';

import Counter from './component/UseReducer';


function App() {
  
  return (
    <Counter/>
  );
}

export default App;
