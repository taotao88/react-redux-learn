import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import io from 'socket.io-client';

let socket = io('http://127.0.0.1:8000');

function urlFormatter(cell, row) {
  return `<a href="${cell}">${cell}</a>`;
}

export default class NotesTable extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }

  componentDidMount() {
    socket.on('NoteAdded', note => {
      this.props.fetchNotes();    
    });
  }

  render() {
    const { notes } = this.props.notes;
    const options = {
      noDataText: 'NO DATA.'
    };

    return (
      <BootstrapTable data={ notes } options={ options } pagination>
        <TableHeaderColumn dataField='_id' isKey={true} hidden>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
        <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
        <TableHeaderColumn dataField='url' dataFormat={ urlFormatter }>URL</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

NotesTable.propTypes = {
  notes: PropTypes.object
};


