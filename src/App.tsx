import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';




function App() {
  return (
    <div className="globalContainer">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/month-statistics" component={MonthStatistics} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
