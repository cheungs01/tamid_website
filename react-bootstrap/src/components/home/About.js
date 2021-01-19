import React from 'react'; 
import { Container } from 'react-bootstrap'; 
import '../../App.css';

export const About = () => (
    <Container className='padding'>
        <div className='title'>
            <p>About</p>
        </div>
        <div className='text'>
            <p>We are the TAMID Chapter at Brown University. TAMID Group is 
                a student-led, apolitical business organization that develops 
                professional skills through hands-on interaction with the 
                Israeli economy. TAMID at Brown prepares the next generation 
                of entrepreneurs through a comprehensive educational program, 
                interactive consulting projects with startup companies, and 
                student-managed capital market research teams.
            </p>
        </div>
    </Container>
)