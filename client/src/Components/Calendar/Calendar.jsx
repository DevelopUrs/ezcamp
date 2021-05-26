import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
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

let Basic = () => (
  <Calendar
    localizer={localizer}
    events={[
      {
        title: "Camping Event",
        start: "2021-05-27",
        end: "2021-05-29",
        allDay: true,
        resource: "Camping",
      },
    ]}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
  />
)

export default Basic;
