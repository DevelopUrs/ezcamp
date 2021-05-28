import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [campAbout, setCampAbout] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [editCalendar, setEditCalendar] = useState(false);

  const toggleCampAbout = () => {
    setCampAbout(!campAbout);
  };

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const toggleEditCalendar = () => {
    setEditCalendar(!editCalendar);
  };

  return (
    <ModalContext.Provider value={{
      campAbout,
      editProfile,
      editCalendar,
      toggleCampAbout,
      toggleEditProfile,
      toggleEditCalendar
    }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;