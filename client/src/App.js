import React from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './Components/Join/Join.jsx';
import Chat from './Components/Chat/Chat.jsx';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/")
  //     .then(() => setData(data));
  // }, []);

  return (
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' exact component={Chat} />
    </Router>
  );
}

export default App;