import React from 'react'; 
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'; 
import MenuItem from 'react-bootstrap/Dropdown'
import styled from 'styled-components'; 

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .link, #dropdown {

        color: #bbb;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
        &:hover {
            color: #44afd6;
        }
    }

    
    .dropdown-menu a {
        font-family: 'Josefin Sans', sans-serif;
        color: black;
        font-size: 20px;
    }
    .dropdown-menu a:hover{
    background: #44afd6;
    background: linear-gradient(left, white, #44afd6);
    background: -moz-linear-gradient(left, white, #44afd6)!important;
    background: (#44afd6);
    color: #f8f9fa !important;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out; }
    }
    
    
`


export class NavigationBar extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isOpen: false }
    }
  
    handleProgramOpen = () => {
      this.setState({ programOpen: true })
    }
  
    handleProgramClose = () => {
       this.setState({ programOpen: false })
    }

    handleTeamOpen = () => {
        this.setState({ teamOpen: true })
    }

    handleTeamClose = () => {
        this.setState({ teamOpen: false })
    }
  
    render() {
      return (
        <Styles>
        <Navbar expland='lg'>
            <Navbar.Brand href='/'>Tamid@Brown</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link className="link" href='/'>Home</Nav.Link></Nav.Item>
                    <NavDropdown
                        onMouseEnter = { this.handleTeamOpen }
                        onMouseLeave = { this.handleTeamClose }
                        show={ this.state.teamOpen }
                        noCaret
                        id="dropdown"
                        title="Team"
                    >
                        <NavDropdown.Item href='/eboard'>Executive Board</NavDropdown.Item>
                        <NavDropdown.Item href='/alumni'>Alumni</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        onMouseEnter = { this.handleProgramOpen }
                        onMouseLeave = { this.handleProgramClose }
                        show={ this.state.programOpen }
                        noCaret
                        id="dropdown"
                        title="Programs"
                    >
                        <NavDropdown.Item href='/fund'>Fund</NavDropdown.Item>
                        <NavDropdown.Item href='/consulting'>Consulting</NavDropdown.Item>
                        <NavDropdown.Item href='/fellowship'>Fellowship</NavDropdown.Item>
                        <NavDropdown.Item href='/education'>Education</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item><Nav.Link className="link" href='/faq'>FAQ</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="link" href='/join'>Join Us</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
      )
    }
  }