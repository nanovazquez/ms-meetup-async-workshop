import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const ActionsMenu = ({
  handleSearch = () => {},
}) => (
  <div className="actions-menu">
    <RaisedButton className="deploy-app" label="Deploy application" primary={true} />
    <TextField hintText="Search applications" onChange={handleSearch} />
  </div>
);

export default ActionsMenu;