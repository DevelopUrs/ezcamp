import React, { createContext, useState } from 'react';

export const LandingPageContext = createContext();

const LandingPageContextProvider = (props) => {
  const [landingPage, setLandingPage] = useState('SignIn');
  const [camp, setCamp] = useState({ id: 1, name: 'Adventure Kids Camp', description: 'ADVENTURE KIDS CAMPS is a full-day camp with a wide variety of unique experiences sure to delight your child! Activities are structured to be healthy, engaging, educational, and most of all, FUN. A highly trained, enthusiastic staff ensures that your child is safe, happy, and making positive relationships with fellow campers. ADVENTURES KIDS CAMP is also economical and provides families with flexible options to best fit summertime schedules.'});
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