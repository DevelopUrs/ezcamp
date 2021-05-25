import React from 'react';
import CampInfo from '../CampInfo/CampInfo.jsx';
import ParentDashboard from '../ParentDashboard/ParentDashboard.jsx';
// import all pages that will need to be shown in Dashboard

const Dashboard = () => {
  return (
    <>
    {/* Where we will conditionally render the pages based on link clicked from SideBar */}
      {/* <CampInfo /> */}
      <ParentDashboard />
    </>
  );
}

export default Dashboard;