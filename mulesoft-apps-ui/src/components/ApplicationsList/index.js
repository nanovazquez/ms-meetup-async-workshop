import React from 'react';
import ActionsMenu from './components/ActionsMenu';
import ApplicationsTable from './components/ApplicationsTable';
import applicationsService from '../../services/applicationsService';

import './styles.css';

class ApplicationsList extends React.Component {

  constructor() {
    super();
    this.state = { applications: [] };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event, searchValue) {
    const filteredApps = searchValue.length
      ? this.state.applications.filter(app => app.name.indexOf(searchValue) !== -1)
      : null;
    this.setState({ filteredApps: filteredApps })
  }

  componentDidMount() {
    applicationsService.getApplications()
      .then(result => this.setState({ applications: result }))
    ;
  }

  render() {
    const applications = this.state.filteredApps || this.state.applications;
    return (
      <div className="applications-list">
        <ActionsMenu handleSearch={this.handleSearch} />
        <ApplicationsTable items={applications} />
      </div>
    );
  }
};

export default ApplicationsList