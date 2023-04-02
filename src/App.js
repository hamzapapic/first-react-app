import "./App.css";
import Greeting from "./components/Greetings/Greeting";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 style={{ color: "#ffffff", fontFamily: "Arial" }}>Logo</h1>
      </header>
      <Greeting appName="Our First App" username={"Bakir Ujkanovic"}></Greeting>
    </div>
  );
}

export default App;
