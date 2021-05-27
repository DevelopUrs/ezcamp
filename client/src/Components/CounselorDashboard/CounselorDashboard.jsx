import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../DashboardResources/components/Grid/GridItem.js";
import GridContainer from "../DashboardResources/components/Grid/GridContainer.js";
import Card from "../DashboardResources/components/Card/Card.js";
import CardHeader from "../DashboardResources/components/Card/CardHeader.js";
import Table from "../DashboardResources/components/Table/Table.js";
import CardBody from "../DashboardResources/components/Card/CardBody.js";
import Avatar from '@material-ui/core/Avatar';
import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";
import sampleParent from '../../Components/sample_parent.jsx';

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from "moment";
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';

const useStyles = makeStyles(styles);
const localizer = momentLocalizer(moment);

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique ullamcorper dapibus.`;

const CounselorDashboard = () => {
  const { user, camp } = useContext(LandingPageContext);
  const [readyToRender, setReadyToRender] = useState(true);
  const [campers, setCampers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    for (let i = 0; i < sampleParent.length; i++) {
      if (sampleParent[i].id === camp.id) {
        for (let j = 0; j < sampleParent[i].parents.length; j++) {
          for (let k = 0; k < sampleParent[i].parents[j].children.length; k++) {
            if (sampleParent[i].parents[j].children[k].childId === user.campers[0]) {
              let camperName = `${sampleParent[i].parents[j].children[k].firstName} ${sampleParent[i].parents[j].children[k].lastName}`;
              let camperPhoto = sampleParent[i].parents[j].children[k].profileImageURL;
              let camper = [(<img width="100px" src={camperPhoto} alt=""></img>), camperName];
              setCampers(camper);
              console.log(camper);
            }
          }
        }
      }
    }
  }, [camp.id, user]);

  var Dashboard = (
    <div>
      <GridContainer>
        <GridItem xs={24} sm={12} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <Avatar src={user.profileImageURL} style={{margin: 0, width: 80, height: 80}}/>
              <h3 className={classes.cardTitle}>{user.firstName} {user.lastName}</h3>
              <p className={classes.cardCategory}>{loremIpsum}</p>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h2 className={classes.cardTitleWhite}>List of campers</h2>
              <p className={classes.cardCategoryWhite}>
                List of campers for the camping event 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Photo", "Name"]}
                tableData={[campers]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Weekly Calendar</h4>
              <p className={classes.cardCategoryWhite}>
                Calendar as part of the Counselor Dashboard
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
