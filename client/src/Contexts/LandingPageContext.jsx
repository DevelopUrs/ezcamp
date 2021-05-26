import React, { createContext, useState } from 'react';

export const LandingPageContext = createContext();

const LandingPageContextProvider = (props) => {
  const [landingPage, setLandingPage] = useState('SignIn');
  const [camp, setCamp] = useState({ id: 1, name: 'Adventure Kids Camp'});
  const [profile, setProfile] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});

  const getUserInfo = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <LandingPageContext.Provider value={{
      landingPage,
      setLandingPage,
      profile,
      setProfile,
      camp,
      setCamp,
      email,
      setEmail,
      user,
      getUserInfo,
      }}>
      {props.children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContextProvider;