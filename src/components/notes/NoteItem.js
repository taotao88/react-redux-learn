import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './NoteItem.css'

export default class NoteItem extends Component {
  render() {
    const { note } = this.props
      
    return (
      <Row className="note">
        <Col sm={2} md={2}>{note.category}</Col>
        <Col sm={2} md={2}>{note.title}</Col>
        <Col sm={8} md={8}><a href={note.url}>{note.url}</a></Col>
      </Row>
    )
  }
}


NoteItem.propTypes = {
  note: PropTypes.object
}
