import React from "react";
import DashboardContextProvider from './Contexts/DashboardContext.jsx';
import Parent from './Components/Profiles/Parent.jsx';
import Counselor from './Components/Profiles/Counselor.jsx';
import Camper from './Components/Profiles/Camper.jsx';
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
      <DashboardContextProvider>
        {/* <Parent /> */}
        {/* <Counselor /> */}
        <Camper />
      </DashboardContextProvider>
    </div>
  );
}

export default App;