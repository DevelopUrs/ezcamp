import React from "react";
import DashboardContextProvider from './Contexts/DashboardContext.jsx';
import ModalContextProvider from './Contexts/ModalContext.jsx';
import Parent from './Components/Profiles/Parent.jsx';
import Counselor from './Components/Profiles/Counselor.jsx';
import Camper from './Components/Profiles/Camper.jsx';
import CampAbout from './Components/Modals/CampAbout.jsx';
import EditProfile from './Components/Modals/ProfileEdit.jsx';
import SignIn from './Components/Sign/SignIn.jsx';
import SignUp from './Components/Sign/SignUp.jsx';
import Registration from './Components/Sign/Registration.jsx';
import { LandingPageContext } from './Contexts/LandingPageContext.jsx';

// import logo from "./logo.svg";
// import "./App.css";

function App() {
  // const [data, setData] = React.useState(null);
  const { landingPage, profile } = React.useContext(LandingPageContext);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header> */}
      <DashboardContextProvider>
        {landingPage === 'SignIn' ? <SignIn/>
          : landingPage === 'SignUp' ? <SignUp/>
          : null}
        <ModalContextProvider>
          {profile === 'Parent' ? <Parent />
            : profile === 'Counselor' ? <Counselor />
            : profile === 'Camper' ? <Camper />
            : null}
          <CampAbout />
          <EditProfile />
        </ModalContextProvider>
      </DashboardContextProvider>
    </div>
  );
}

export default App;