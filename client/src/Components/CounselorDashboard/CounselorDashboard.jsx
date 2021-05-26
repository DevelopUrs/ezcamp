import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import Cloud from "@material-ui/icons/Cloud";
import GridItem from "../DashboardResources/components/Grid/GridItem.js";
import GridContainer from "../DashboardResources/components/Grid/GridContainer.js";
import Tasks from "../DashboardResources/components/Tasks/Tasks.js";
import CustomTabs from "../DashboardResources/components/CustomTabs/CustomTabs.js";
import Card from "../DashboardResources/components/Card/Card.js";
import CardHeader from "../DashboardResources/components/Card/CardHeader.js";
import CardIcon from "../DashboardResources/components/Card/CardIcon.js";
import CardFooter from "../DashboardResources/components/Card/CardFooter.js";

import { bugs, website, server } from "../DashboardResources/variables/general.js";

import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";

const useStyles = makeStyles(styles);
const localizer = momentLocalizer(moment);

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique ullamcorper dapibus.
Aliquam aliquam porttitor est, eget venenatis velit mattis ac. Ut porta mollis iaculis. Donec nec augue commodo,
bibendum turpis ut, molestie ipsum. Curabitur consectetur, mauris id aliquet laoreet, risus lorem imperdiet ex,
eu lacinia urna sapien in quam. Etiam dignissim dolor velit, sed posuere neque aliquam nec. Duis mi nisi, fermentum
ac mi lobortis, accumsan efficitur dui. Ut semper posuere mi non aliquet. Quisque rutrum efficitur vestibulum.`;

const CounselorDashboard = () => {

  const [readyToRender, setReadyToRender] = useState(true);
  const classes = useStyles();

  var Dashboard = (
    <div>
      <GridContainer>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>Kid&apos;s Name</h3>
              <p className={classes.cardCategory}>{loremIpsum}</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <h3 className={classes.cardTitle}>Assigned Counselor</h3>
              <p className={classes.cardCategory}>{loremIpsum}</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
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
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );

  let returnRender = readyToRender ? (<div>{Dashboard}</div>) : (<div>Loading...</div>);
  return returnRender;

}

export default CounselorDashboard;
