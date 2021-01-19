import React from 'react'; 
import Container from 'react-bootstrap/Container'; 
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import { BookIcon, DiscussionIcon, GraphIcon, PlaneIcon } from './PillarIcons';
import { Link } from 'react-router-dom'; 
import '../../App.css'; 

export const Pillars = () => (
    <Container fluid>
        <div className='title'>
            <p>Our Pillars</p>
        </div>
        <div className='subtitle'>
            <Row>
                <Col>
                    <h1>Education</h1>
                </Col>
                <Col>
                    <h1>Consulting</h1>
                </Col>
                <Col>
                    <h1>Investment Fund</h1>
                </Col>
                <Col>
                    <h1>Fellowship</h1>
                </Col>
            </Row>
        </div>
        <div className='icon'>
            <Row>
                <Col>
                    <Link to='/education'>
                        <BookIcon/>
                    </Link>
                </Col>
                <Col>
                    <Link to='/consulting'>
                        <DiscussionIcon/>
                    </Link>
                </Col>
                <Col>
                    <Link to='/fund'>
                        <GraphIcon/>
                    </Link>
                </Col>
                <Col>
                    <Link to='/fellowship'>
                        <PlaneIcon/>
                    </Link>
                </Col>
            </Row>
        </div>
        <Row>
            <Col>
                <div className='text'>
                    <p>
                        Members participate in an interactive educational 
                        program that integrates business leadership principles 
                        with Israel’s economic landscape.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='text'>
                    <p>
                        Members may choose to join student consulting 
                        teams, advising Israeli companies on the solutions 
                        to important business problems.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='text'>
                    <p>
                        Members can also choose to join the Investment 
                        Fund program, in which teams conduct equity 
                        research and manage a stock portfolio.
                    </p>
                </div>
            </Col>
            <Col>
                <div className='text'>
                    <p>
                        Each summer, members have the opportunity to 
                        spend eight weeks in Israel on our capstone 
                        internship experience.
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
)