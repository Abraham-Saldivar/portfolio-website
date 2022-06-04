// Components
import "./App.css";
import Home from "./Home";
import ConwaysGameOfLife from "./ConwaysGameOfLife";

function App() {
  return (
    <div className="App">
      <ConwaysGameOfLife />
      <Home />
    </div>
  );
}

export default App;

//? This is the section for vanishing welcome message
// const [visible, setVisible] = useState(true);
// setTimeout(function () {
//   setVisible(false);
// }, 8000);
/* {visible ? (
        <>
          {" "}
          <WelcomeMessage />
        </>
      ) : null} */

/* <h1>This is the App component.</h1> */
//?
