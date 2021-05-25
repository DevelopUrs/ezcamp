import React from 'react';
import CampInfo from '../CampInfo/CampInfo.jsx';

// import all pages that will need to be shown in Dashboard

const Dashboard = () => {
  return (
    <>
    {/* Where we will conditionally render the pages based on link clicked from SideBar */}
      <CampInfo />
      {/* {view === 'My Profile' ? <CounselorDashboard />
        :  <CampInfo />
      } */}
    </>
  );
}

export default Dashboard;