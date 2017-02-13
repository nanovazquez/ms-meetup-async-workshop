import React from 'react';
import ActionsMenu from './components/ActionsMenu';
import ApplicationsTable from './components/ApplicationsTable';
import applicationsService from '../../services/applicationsService';

import './styles.css';

class ApplicationsList extends React.Component {

  constructor() {
    super();
    this.state = { applications: [] };
  }

  componentDidMount() {
    applicationsService.getApplications()
      .then(result => this.setState({ applications: result }))
    ;
  }

  render() {
    return (
      <div className="applications-list">
        <ActionsMenu />
        <ApplicationsTable items={this.state.applications} />
      </div>
    );
  }
};

export default ApplicationsList