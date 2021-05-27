import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [view, setView] = useState('My Profile');

  return (
    <DashboardContext.Provider value={{ view, setView }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;