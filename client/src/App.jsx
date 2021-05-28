import React from "react";
import DashboardContextProvider from "./Contexts/DashboardContext.jsx";
import ModalContextProvider from "./Contexts/ModalContext.jsx";
import Parent from "./Components/Profiles/Parent.jsx";
import Counselor from "./Components/Profiles/Counselor.jsx";
import Camper from "./Components/Profiles/Camper.jsx";
import CampAbout from "./Components/Modals/CampAbout.jsx";
import EditProfile from "./Components/Modals/ProfileEdit.jsx";
import CalendarEdit from "./Components/Modals/CalendarEdit.jsx";
import SignIn from "./Components/Sign/SignIn.jsx";
import SignUp from "./Components/Sign/SignUp.jsx";
import Registration from "./Components/Sign/Registration.jsx";
import { LandingPageContext } from "./Contexts/LandingPageContext.jsx";
import EventsContextProvider from "./Contexts/EventsContext.jsx";

function App() {
  const { landingPage, profile } = React.useContext(LandingPageContext);

  return (
    <div className="App">
      <DashboardContextProvider>
        {landingPage === "SignIn" ? (
          <SignIn />
        ) : landingPage === "SignUp" ? (
          <SignUp />
        ) : landingPage === "Register" ? (
          <Registration />
        ) : null}
        <EventsContextProvider>
          <ModalContextProvider>
            {profile === "Parent" ? (
              <Parent />
            ) : profile === "Counselor" ? (
              <Counselor />
            ) : profile === "Camper" ? (
              <Camper />
            ) : null}
            <CampAbout />
            <EditProfile />
            <CalendarEdit />
          </ModalContextProvider>
        </EventsContextProvider>
      </DashboardContextProvider>
    </div>
  );
}

export default App;

// import React from "react";

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Join from './Components/Join/Join.jsx';
// import Chat from './Components/Chat/Chat.jsx';

// function App() {
//   return (
//     <Router>
//       <Route path='/' exact component={Join} />
//       <Route path='/chat' exact component={Chat} />
//     </Router>
//   );
// }

// export default App;
