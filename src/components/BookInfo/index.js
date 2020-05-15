import React from 'react'
import "./style.css"

import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function BookInfo(props) {
    const jumboStyle = {
        backgroundColor: "rgb(240, 220, 240)",
        paddingTop: "32px"
    };

    const buttonStyle = {
        backgroundColor: "purple",
        border: "purple"
    }

    const toggleStyle = {
        backgroundColor: "white"
    }

    return (
        <Container className="p-3 BookInfo">
            {props.booklist.map(book => (
                <div className="row" key={book.id}>
                    <div className="col-sm-4">
                        <img className="poster" src="assets/ProfilePic.jpg" alt="Diana Stebbins profile" />
                    </div> 
    
                    <div className="col-sm-8">
                        <Jumbotron style={jumboStyle} className="pb-1" >
                            <h4 className="header">{book.title}, by {book.authors[0]}</h4>
                            <Button name={book.id} bookid={book.id} onClick={props.handleButtonClick} style={buttonStyle}> {props.actionButtonPrompt} </Button>
                            
                            <hr />

                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" style={toggleStyle}> More info... </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <p>Categories: Adventure</p>
                                            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio commodi ex voluptatum quasi, provident, sint saepe sunt beatae odit debitis eos fugiat quae quibusdam eaque velit, animi obcaecati ipsam modi.</p>
                                            <p>Pages:678</p>
                                            <p>Find more info on {' '}
                                                <a href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
                                                    target="_blank" rel="noopener noreferrer" >
                                                    Google Books </a> .
                                            </p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Jumbotron>
                    </div>
                </div>
            ))}
        </Container>
    )
}