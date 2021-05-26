import React, { createContext, useState, useContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [campAbout, setCampAbout] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const toggleCampAbout = () => {
    setCampAbout(!campAbout);
  };

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  return (
    <ModalContext.Provider value={{
      campAbout,
      editProfile,
      toggleCampAbout,
      toggleEditProfile
    }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;