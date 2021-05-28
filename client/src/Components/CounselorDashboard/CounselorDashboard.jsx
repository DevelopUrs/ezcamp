import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../DashboardResources/components/Grid/GridItem.js";
import GridContainer from "../DashboardResources/components/Grid/GridContainer.js";
import Card from "../DashboardResources/components/Card/Card.js";
import CardHeader from "../DashboardResources/components/Card/CardHeader.js";
import Table from "../DashboardResources/components/Table/Table.js";
import CardBody from "../DashboardResources/components/Card/CardBody.js";
import Avatar from '@material-ui/core/Avatar';
import { EventsContext } from '../../Contexts/EventsContext.jsx';
import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";
import sampleParent from '../../Components/sample_parent.jsx';
import sampleCounselor from '../../Components/sample_Counselor.jsx';
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
  // const [campersArr, setCampersArr] = useState([]);
  const { events } = useContext(EventsContext);
  const classes = useStyles();

  useEffect(() => {
    let campersArr;
    for (let m = 0; m < sampleCounselor.length; m++) {
      if (sampleCounselor[m].id === camp.id) {
        for (let n = 0; n < sampleCounselor[m].counselors.length; n++) {
          if (user.email === sampleCounselor[m].counselors[n].email) {
            campersArr = sampleCounselor[m].counselors[n].campers;
          }
        }
      }
    }
    let allCampers = [];
    for (let i = 0; i < campersArr.length; i++) {
      for (let j = 0; j < sampleParent.length; j++) {
        if (sampleParent[j].id === camp.id) {
          for (let k = 0; k < sampleParent[j].parents.length; k++) {
            for (let l = 0; l < sampleParent[j].parents[k].children.length; l++) {
              if (sampleParent[j].parents[k].children[l].childId === campersArr[i]) {
                let currCamper = sampleParent[j].parents[k].children[l];
                let camperName = `${currCamper.firstName} ${currCamper.lastName}`;
                let camperPhoto = currCamper.profileImageURL;
                let camper = [(<img width="100px" src={camperPhoto} alt=""></img>), camperName];
                allCampers.push(camper);
                // setCampers([...campers, camper]);
              }
            }
          }
        }
      }
      console.log(allCampers);
      setCampers(allCampers);
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
                tableData={campers}
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

export default CounselorDashboard;
