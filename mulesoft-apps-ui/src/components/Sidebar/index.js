import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import './styles.css';

const Sidebar = () => (
  <div className="sidebar">
    <RaisedButton label="PRODUCTION" />
    <Menu className="menu" desktop={true}>
      <MenuItem primaryText="Applications" />
      <MenuItem primaryText="Servers" />
      <MenuItem primaryText="Alerts" />
      <Divider />
      <MenuItem primaryText="VPCs" />
    </Menu>
  </div>
);

export default Sidebar;