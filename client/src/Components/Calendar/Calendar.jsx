import React, { useContext } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from '@material-ui/core/Button';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
// import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";
import moment from "moment";

// const useStyles = makeStyles(styles);
const localizer = momentLocalizer(moment);

// let allViews = Object.keys(Views).map(k => Views[k])

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   })

const Basic = () => {
  const { toggleEditCalendar } = useContext(ModalContext);


  return (
    <>
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
    <Button size="small" color="primary" onClick={toggleEditCalendar}>Edit</Button>
    </>
  )
}

export default Basic;
