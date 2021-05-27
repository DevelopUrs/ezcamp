import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import { TextField } from '@material-ui/core/TextField';

import { ModalWrapper, ModalBackdrop, ModalBox, CloseIcon, THead, Label, Form, Text } from './Modal.style.jsx';

const CampAbout = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const { editProfile, toggleEditProfile } = useContext(ModalContext);

  const handleName = (e) => {
    console.log(e.target.value);
  }

  const handleBio = (e) => {
    console.log(e.target.value);
  }

  return editProfile ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleEditProfile}><AiOutlineClose /></CloseIcon>
        <THead>EDIT STAFF INFO</THead>
        <Form>
          <Label>
            Counselor Name:
          </Label>
          <Text type="text" id="campName" name="name" placeholder="Camp Name" onChange={handleName} /><br /><br />
          <Label>Counselor Bio: </Label>
          <textarea id="campDescription" name="description" placeholder="Camp Description" onChange={handleBio} rows="10"></textarea><br /><br />
          <Label>Upload Photo: </Label>
          <input type="file" id="myFile" name="filename"></input><br /><br />
          <input type="submit" />
        </Form>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default CampAbout;