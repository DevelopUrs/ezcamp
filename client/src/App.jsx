import React from "react";
import Parent from './Components/Profiles/Parent.jsx';
import Counselor from './Components/Profiles/Counselor.jsx';
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header> */}
      {/* <Parent /> */}
      <Counselor />
    </div>
  );
}

export default App;