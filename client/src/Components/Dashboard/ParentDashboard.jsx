import React, { useContext } from 'react';
import CampInfo from '../CampInfo/ParentCampInfo.jsx';
import ParentDashboard from '../ParentDashboard/ParentDashboard.jsx';
import { DashboardContext } from '../../Contexts/DashboardContext.jsx';
import ParentForms from '../Forms/ParentForms.jsx';

// import all pages that will need to be shown in Dashboard

const Dashboard = () => {
  const { view } = useContext(DashboardContext);

  return (
    <>
    {/* Where we will conditionally render the pages based on link clicked from SideBar */}
      {view === 'My Profile' ? <ParentDashboard />
        : view === 'Forms' ? <ParentForms />
        :  <CampInfo />
      }
    </>
  );
}

export default Dashboard;