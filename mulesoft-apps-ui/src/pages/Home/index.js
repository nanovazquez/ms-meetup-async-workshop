import React, { Component } from 'react';
import AppHeader from '../../components/AppHeader';
import Sidebar from '../../components/Sidebar';
import ApplicationsList from '../../components/ApplicationsList';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <AppHeader />
        <div className="body">
          <Sidebar />
          <ApplicationsList />
        </div>
      </div>
    );
  }
};

export default Home;
