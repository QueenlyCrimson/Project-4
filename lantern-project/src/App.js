import logo from "./logo.svg";
import "./App.css";

function App() {
  const ws = new WebSocket("ws://localhost:8082");

  ws.addEventListener("open", () => {
    console.log("We are connected");

    ws.send("hey guys whats up");
  });

  ws.addEventListener("message", (e) => {
    console.log(e.data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
