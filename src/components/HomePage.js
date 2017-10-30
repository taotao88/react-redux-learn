import React from 'react';  
import Header from './Header';
import NotesTable from '../containers/notes/NotesTable';

export default class HomePage extends React.Component {  
  render() {
    return (
      <div>
        <Header />
        <NotesTable />
      </div>
    );
  }
}

