import React from 'react'
import "./style.css"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export default function SearchForm(props) {
  return (
    <Form inline className="SearchForm"> 
      <FormControl type="text" placeholder="title contains" className="mr-sm-2" onChange={props.handleInputChange} />
      <Button variant="outline-dark" name="Search" onClick={props.handleButtonClick}>Search Google Book Titles</Button>
      <div className="just-text">or go to</div>
      <Button variant="outline-dark" name="Saved" onClick={props.handleButtonClick}>Saved Books</Button>
    </Form>
  )
}