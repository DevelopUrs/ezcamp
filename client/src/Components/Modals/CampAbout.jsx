import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';

import { ModalWrapper, ModalBackdrop, ModalBox, CloseIcon, THead, Label, Form, Text } from './Modal.style.jsx';

const CampAbout = () => {
  const [about, setAbout] = useState('');
  const [description, setDescription] = useState('');
  const { campAbout, toggleCampAbout } = useContext(ModalContext);

  const handleName = (e) => {
    console.log(e.target.value);
  }

  const handleDescription = (e) => {
    console.log(e.target.value);
  }

  return campAbout ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleCampAbout}><AiOutlineClose /></CloseIcon>
        <THead>EDIT CAMP INFO</THead>
        <Form>
          <Label>
            Camp Name:
          </Label>
          <Text type="text" id="campName" name="name" placeholder="Camp Name" onChange={handleName} /><br /><br />
          <Label>Camp Description: </Label>
          <textarea id="campDescription" name="description" placeholder="Camp Description" onChange={handleDescription} rows="10"></textarea><br /><br />
          <input type="submit" />
        </Form>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default CampAbout;