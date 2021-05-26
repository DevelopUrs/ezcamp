import React, { useContext } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from '@material-ui/core/Button';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import styled from 'styled-components';
import moment from "moment";

const Container = styled.div`
  z-index: 99;
`;

const localizer = momentLocalizer(moment);

const Basic = () => {
  const { toggleEditCalendar } = useContext(ModalContext);


  return (
    <>
    <Container>
      <Calendar
        localizer={localizer}
        events={[
          {
            title: "Camping Event",
            start: "2021-05-27",
            end: "2021-05-27",
          },
          {
            title: "Another Event",
            start: "2021-05-27",
            end: "2021-05-27",
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Container>
    <Button size="small" color="primary" onClick={toggleEditCalendar}>Edit</Button>
    </>
  )
}

export default Basic;
