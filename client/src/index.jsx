import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import LandingPageContextProvider, { LandingPageContext } from './Contexts/LandingPageContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <LandingPageContextProvider>
      <App />
    </LandingPageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
