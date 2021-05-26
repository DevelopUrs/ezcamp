import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import Button from '@material-ui/core/Button';
import { ModalWrapper, ModalBackdrop, ModalBox, CloseIcon, THead, Label, Form, Text } from './Modal.style.jsx';

const CalendarEdit = () => {
  const [activity, setActivity] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const { editCalendar, toggleEditCalendar } = useContext(ModalContext);

  const handleActivity = (e) => {
    console.log(e.target.value);
    //setActivity(e.target.value);
  }

  const handleDate = (e) => {
    console.log(e.target.value);
    //setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(e.target.value);
  }

  return editCalendar ? (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalBox>
        <CloseIcon onClick={toggleEditCalendar}><AiOutlineClose /></CloseIcon>
        <THead>EDIT CALENDAR</THead>
        <Form>
          <Label>
            Activity Name:
          </Label>
          <Text type="text" id="campName" name="name" placeholder="Camp Name" onChange={handleActivity} /><br /><br />
          <Label>Date: </Label>
          <input type="date" id="start" name="date" onChange={handleDate} /><br /><br />
          <Button size="small" color="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default CalendarEdit;