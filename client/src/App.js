import logo from "./logo.svg";
// Components
import "./App.css";
import Home from "./Home";
import WelcomeMessage from "./WelcomeMessage";
//
// Animation Section
import { Skeleton } from "@mui/material";
//
// Hooks
import { useState } from "react";
//

function App() {
  const [visible, setVisible] = useState(true);
  setTimeout(function () {
    setVisible(false);
  }, 8000);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

//? This is the section for vanishing welcome message
/* {visible ? (
        <>
          {" "}
          <WelcomeMessage />
        </>
      ) : null} */

/* <h1>This is the App component.</h1> */
//?
