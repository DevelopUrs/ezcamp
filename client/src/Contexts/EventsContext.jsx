import React, { createContext, useState } from 'react';
import Events from '../Components/sample_events.jsx'

export const EventsContext = createContext();

const EventsContextProvider = (props) => {
  const [events, setEvents] = useState(Events);

  return (
    <EventsContext.Provider value={{
      events,
      setEvents
      }}>
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
