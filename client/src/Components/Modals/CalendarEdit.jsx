import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import { EventsContext } from '../../Contexts/EventsContext.jsx';
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';
import Button from '@material-ui/core/Button';
import { ModalWrapper, ModalBackdrop, ModalBox, CloseIcon, THead, Label, Form, Text } from './Modal.style.jsx';
import $ from 'jquery';

const CalendarEdit = () => {
  const { editCalendar, toggleEditCalendar } = useContext(ModalContext);
  const { camp } = useContext(LandingPageContext);
  const { events, setEvents } = useContext(EventsContext);
  const [activity, setActivity] = useState({ campCode: camp.id, month: null, title: null, start: null, end: null});
  const [months, setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

  const handleActivity = (e) => {
    setActivity({...activity, title: e.target.value});
    //setActivity(e.target.value);
  }

  const handleStartDate = (e) => {
    let month = Number(e.target.value.slice(5,7));
    setActivity({...activity, month: months[month - 1],start: e.target.value});
    //setDate(e.target.value);
  }

  const handleEndDate = (e) => {
    setActivity({...activity, end: e.target.value});
    //setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    setEvents([...events, activity]);
    addEvent(activity);
  }

  const addEvent = (data) => {
    $.ajax({
      url: `/calendar/${camp.id}`,
      type: 'POST',
      data: data,
      success: (msg) => console.log(msg),
      error: (error) => console.log(error)
    })
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
          <Label>Start Date: </Label>
          <input type="date" id="start" name="date" onChange={handleStartDate} /><br /><br />
          <Label>End Date: </Label>
          <input type="date" id="start" name="date" onChange={handleEndDate} /><br /><br />
          <Button size="small" color="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
      </ModalBox>
    </ModalWrapper>
  ) : null;
};

export default CalendarEdit;