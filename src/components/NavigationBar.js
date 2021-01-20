import React from 'react'; 
import { Nav, Navbar } from 'react-bootstrap'; 
import styled from 'styled-components'; 

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link {

        color: #bbb;
        &:hover {
            color: white;
        }
    }
`

export const NavigationBar = () => (
    <Styles>
        <Navbar expland='lg'>
            <Navbar.Brand href='/'>Tamid@Brown</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/team'>Team</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/fund'>Fund</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/consulting'>Consulting</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/education'>Education</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/faq'>FAQ</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/join'>Join Us</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)