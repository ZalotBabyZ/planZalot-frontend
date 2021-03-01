import './App.css';
import { useState } from 'react';
import DateContext from '@context/DateContext';

import DailyJournal from '@pages/DailyJournal';
import NavBar from '@components/NavBar';

const today = new Date().toISOString().slice(0, 10);
function App() {
  const [date, setDate] = useState(today);
  return (
    <div className="App">
      <DateContext.Provider value={{ date, setDate }}>
        {/* navbar */}
        <div className="hidden-onprint">
          <NavBar />
        </div>
        {/* mainpage */}
        <div>
          <DailyJournal />
        </div>
      </DateContext.Provider>
    </div>
  );
}

export default App;
