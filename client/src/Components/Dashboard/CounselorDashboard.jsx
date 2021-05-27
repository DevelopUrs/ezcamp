import React, { useContext } from 'react';
import CampInfo from '../CampInfo/CampInfo.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import Campers from '../Campers/Campers.jsx';
import CounselorDashboard from '../CounselorDashboard/CounselorDashboard.jsx';
import { DashboardContext } from '../../Contexts/DashboardContext.jsx';

// import all pages that will need to be shown in Dashboard

const Dashboard = () => {
  const { view } = useContext(DashboardContext);

  return (
    <>
    {/* Where we will conditionally render the pages based on link clicked from SideBar */}
      {view === 'My Profile' ? <CounselorDashboard />
        : view === 'Campers' ? <Campers />
        : view === 'Calendar of Events' ? <Calendar />
        : <CampInfo />
      }
    </>
  );
}

export default Dashboard;