import React from 'react';
import './App.sass';
import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="dashboard-ctn">
      <Header />
      <div className="row mx-0">
        <div className="left-bar col-3">
          <img className="mx-3 my-5" src="images/left-panel.svg" />
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
