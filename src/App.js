import React from 'react';
import AirlinesList from './components/AirlinesList';
import AirlineCard from './components/AirlineCard.js';
import './styles/AirlinesList.css';
import './styles/AirlineCard.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <AirlinesList />
      <AirlineCard />
    </div>
  );
}

export default App;
