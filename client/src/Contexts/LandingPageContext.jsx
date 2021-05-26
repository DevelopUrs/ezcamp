import React, { createContext, useState } from 'react';

export const LandingPageContext = createContext();

const LandingPageContextProvider = (props) => {
  const [landingPage, setLandingPage] = useState('SignIn');
  const [profile, setProfile] = useState('');
  const [email, setEmail] = useState('');

  return (
    <LandingPageContext.Provider value={{
      landingPage,
      setLandingPage,
      profile,
      setProfile,
      email,
      setEmail
      }}>
      {props.children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContextProvider;