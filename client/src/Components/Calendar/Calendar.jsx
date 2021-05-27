import React, { useContext } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from '@material-ui/core/Button';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import styled from 'styled-components';
import { EventsContext } from '../../Contexts/EventsContext.jsx';
// import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";
import moment from "moment";

const Container = styled.div`
  z-index: 99;
`;

const localizer = momentLocalizer(moment);

const Basic = () => {
  const { toggleEditCalendar } = useContext(ModalContext);
  const { events } = useContext(EventsContext);


  return (
    <>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    <Button size="small" color="primary" onClick={toggleEditCalendar}>Edit</Button>
    </>
  )
}

export default Basic;
