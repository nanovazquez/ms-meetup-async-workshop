import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './styles.css';

const ApplicationsTable = ({
  items = []
}) => (
  <Table
    className="applications-table"
    fixedHeader={true}
  >
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Server</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>File</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      showRowHover={true}
      displayRowCheckbox={false}
    >
    {
      items.map(app => (
          <TableRow   key={app.id}>
          <TableRowColumn>{app.name}</TableRowColumn>
          <TableRowColumn>{app.target}</TableRowColumn>
          <TableRowColumn>{app.status}</TableRowColumn>
          <TableRowColumn>{app.file}</TableRowColumn>
        </TableRow>
      ))
    }
    </TableBody>
  </Table>
);

export default ApplicationsTable;