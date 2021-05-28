import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Cloud from "@material-ui/icons/Cloud";
import GridItem from "../DashboardResources/components/Grid/GridItem.js";
import GridContainer from "../DashboardResources/components/Grid/GridContainer.js";
import Tasks from "../DashboardResources/components/Tasks/Tasks.js";
import CustomTabs from "../DashboardResources/components/CustomTabs/CustomTabs.js";
import Card from "../DashboardResources/components/Card/Card.js";
import CardHeader from "../DashboardResources/components/Card/CardHeader.js";
import Avatar from '@material-ui/core/Avatar';
// import CardIcon from "../DashboardResources/components/Card/CardIcon.js";
// import CardFooter from "../DashboardResources/components/Card/CardFooter.js";
import { EventsContext } from '../../Contexts/EventsContext.jsx';

import { bugs, website, server } from "../DashboardResources/variables/general.js";
import sampleCounselor from '../../Components/sample_Counselor.jsx';

import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';

const useStyles = makeStyles(styles);
const localizer = momentLocalizer(moment);

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique ullamcorper dapibus.`;

const ParentDashboard = () => {
  const { user, camp } = useContext(LandingPageContext);

  const { events, setEvents } = useContext(EventsContext);
  const [readyToRender, setReadyToRender] = useState(true);
  const [children, setChildren] = useState({});
  const [counselor, setCounselor] = useState({});
  const classes = useStyles();

  useEffect(() => {
    setChildren(user.children[0]);
    for (let i = 0; i < sampleCounselor.length; i++) {
      if (sampleCounselor[i].id === camp.id) {
        for (let j = 0; j < sampleCounselor[i].counselors.length; j++) {
          if (sampleCounselor[i].counselors[j].counselorId === children.counselor) {
            setCounselor(sampleCounselor[i].counselors[j]);
          }
        }
      }
    }
  }, [camp.id, children.counselor, user]);

  var Dashboard = (
    <div>
      <GridContainer>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <Avatar src={children.profileImageURL} style={{margin: 0, width: 80, height: 80}}/>
              <h3 className={classes.cardTitle}>{children.firstName} {children.lastName}</h3>
              <p className={classes.cardCategory}>
                Parent: {user.firstName} {user.lastName}<br />
                Allergies: {children.allergies}
              </p>
              <p className={classes.cardCategory}></p>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
            <Avatar src={counselor.profileImageURL} style={{margin: 0, width: 80, height: 80}}/>
              <h3 className={classes.cardTitle}>Assigned Counselor</h3>
              <p className={classes.cardCategory}>
                <em><b>{counselor.firstName} {counselor.lastName}</b></em><br />
                Email: {counselor.email}<br />
                Bio: {loremIpsum}
              </p>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Happening Now:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Sports",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Education",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Other",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Weekly Calendar</h4>
              <p className={classes.cardCategoryWhite}>
                Calendar as part of the Parents Dashboard
              </p>
            </CardHeader>
            <br></br>
            <div>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );

  let returnRender = readyToRender ? (<div>{Dashboard}</div>) : (<div>Loading...</div>);
  return returnRender;

}

export default ParentDashboard;
