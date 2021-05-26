import React, { createContext, useState } from 'react';

export const LandingPageContext = createContext();

const LandingPageContextProvider = (props) => {
  const [landingPage, setLandingPage] = useState('SignIn');

  return (
    <LandingPageContext.Provider value={{ landingPage, setLandingPage }}>
      {props.children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContextProvider;