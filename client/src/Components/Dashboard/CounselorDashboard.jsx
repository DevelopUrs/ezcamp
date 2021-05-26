import React from 'react';
import CampInfo from '../CampInfo/CampInfo.jsx';
import CounselorDashboard from '../CounselorDashboard/CounselorDashboard.jsx';

// import all pages that will need to be shown in Dashboard

const Dashboard = () => {
  return (
    <>
    {/* Where we will conditionally render the pages based on link clicked from SideBar */}
      {view === 'My Profile' ? <CounselorDashboard />
        :  <CampInfo />
      }
    </>
  );
}

export default Dashboard;