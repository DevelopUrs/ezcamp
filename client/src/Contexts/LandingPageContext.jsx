import React, { createContext, useState } from 'react';

export const LandingPageContext = createContext();

const LandingPageContextProvider = (props) => {
  const [landingPage, setLandingPage] = useState('SignIn');
  const [camp, setCamp] = useState(1);
  const [profile, setProfile] = useState('');

  return (
    <LandingPageContext.Provider value={{
      landingPage,
      setLandingPage,
      profile,
      setProfile,
      camp,
      setCamp
      }}>
      {props.children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContextProvider;