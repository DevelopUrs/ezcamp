import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Cloud from "@material-ui/icons/Cloud";
import GridItem from "../DashboardResources/components/Grid/GridItem.js";
import GridContainer from "../DashboardResources/components/Grid/GridContainer.js";
import Tasks from "../DashboardResources/components/Tasks/Tasks.js";
import CustomTabs from "../DashboardResources/components/CustomTabs/CustomTabs.js";
import Card from "../DashboardResources/components/Card/Card.js";
import CardHeader from "../DashboardResources/components/Card/CardHeader.js";
import Avatar from '@material-ui/core/Avatar';
import { bugs, website, server } from "../DashboardResources/variables/general.js";
import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';
import sampleParent from '../../Components/sample_parent.jsx';
import sampleCounselor from '../../Components/sample_Counselor.jsx';

const useStyles = makeStyles(styles);
const localizer = momentLocalizer(moment);

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique ullamcorper dapibus.`;

const CamperDashboard = () => {
  const { user, camp, email } = useContext(LandingPageContext);
  const [camper, setCamper] = useState({});
  const [counselor, setCounselor] = useState({});
  const [readyToRender, setReadyToRender] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    let currCounselor = 0;
    for (let i = 0; i < sampleParent.length; i++) {
      if (sampleParent[i].id === camp.id) {
        for (let j = 0; j < sampleParent[i].parents.length; j++) {
          if (sampleParent[i].parents[j].parentId === user.parentId) {
            for (let k = 0; k < user.children.length; k++) {
              if (user.children[k].email === email) {
                currCounselor = user.children[k].counselor;
                setCamper(user.children[k]);
              }
            }
          }
        }
      }
    }
    for (let m = 0; m < sampleCounselor.length; m++) {
      if (sampleCounselor[m].id === camp.id) {
        for (let n = 0; n < sampleCounselor[m].counselors.length; n++) {
          if (sampleCounselor[m].counselors[n].counselorId === currCounselor) {
            setCounselor(sampleCounselor[m].counselors[n]);
          }
        }
      }
    }
  }, [camp.id, email, user]);

  var Dashboard = (
    <div>
      <GridContainer>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
            <Avatar src={camper.profileImageURL} style={{margin: 0, width: 80, height: 80}}/>
              <h3 className={classes.cardTitle}>{camper.firstName} {camper.lastName}</h3>
              <p className={classes.cardCategory}>
                Parent: {user.firstName} {user.lastName} <br />
                Allergies: {camper.allergies}
              </p>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
            <Avatar src={counselor.profileImageURL} style={{margin: 0, width: 80, height: 80}}/>
              <h3 className={classes.cardTitle}>Assigned Counselor</h3>
              <p className={classes.cardCategory}>
                Name: {counselor.firstName} {counselor.lastName} <br />
                Email: {counselor.email} <br />
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

export default CamperDashboard;
