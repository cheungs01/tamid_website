import React from 'react'; 
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';  
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Styles = styled.div`
    .main-footer {
        color: white;
        background-color: #222;
        padding-top: 1em;
        position: relative;
        bottom: 0;
        width: 100%;
      }

    .main-footer p,h4,li {
        color: #bbb; 
    }

    .footer-container {
        margin-left: 5%; 
        margin-right: 5%;
    }

    .nav-link {
        color: #bbb;
        &:hover {
            color: white;
        }
    }

`

export const Footer = () => (
    <Styles>
    <div className="main-footer">
      <div className='footer-container'>
        <div className="row">
          {/* Column1 */}
          <div className="col-sm-6">
            <h4>TAMID Group at Brown</h4>
            <p>
                TAMID Group is a student-led, apolitical business organization 
                that develops professional skills through hands-on interaction 
                with the Israeli economy. 
            </p>
          </div>
          {/* Column2 */}
          <div className="col-sm-2">
              <ui className="list-unstyled">
                <li><Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item></li>
                <li><Nav.Item><Nav.Link href='/team'>Team</Nav.Link></Nav.Item></li>
                <li><Nav.Item><Nav.Link href='/fund'>Fund</Nav.Link></Nav.Item></li>
              </ui>
          </div>
          {/* Column3 */}
          <div className="col-sm-2">
            <ui className="list-unstyled">
              <li><Nav.Item><Nav.Link href='/consulting'>Consulting</Nav.Link></Nav.Item></li>
              <li><Nav.Item><Nav.Link href='/education'>Education</Nav.Link></Nav.Item></li>
              <li><Nav.Item><Nav.Link href='/faq'>FAQ</Nav.Link></Nav.Item></li>
            </ui>
          </div>
          <div className="col-sm-2">
            <ui className="list-unstyled">
              <li><Nav.Item><Nav.Link href='/join'>Join Us</Nav.Link></Nav.Item></li>
              <li>
                  <Nav.Link href='https://www.facebook.com/tamidatbrown/'><FaFacebook/></Nav.Link>
                  <Nav.Link href='https://www.linkedin.com/company/tamid-israel-investment-group/'><FaLinkedin/></Nav.Link>            
                </li>
            </ui>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TAMID Group at Brown
          </p>
        </div>
      </div>
    </div>
    </Styles>
)