import React from 'react'
import Container from 'react-bootstrap/Container'; 
import './App.css';
import { Profile } from './components/team/Profile';
import { LineBreak } from './components/Line';
import steven from './assets/steven_headshot.jpg';
import matthew from './assets/matthew_headshot.jpg';
import ben from './assets/ben_headshot.jpg';

export const Team = () => (
    <Container fluid>
        <div className='title'>Our Team</div>
        <div className='subtitle'>Executive Board</div>
        <br/>
        <div class="grid">
            <div>
                <Profile name="Benjamin Fink" year="'21" pos="President"
                bio="" img={ben}/>
            </div>
            <div>
                <Profile name="Matthew Dai" year="'21.5" pos="Co-Director of Consulting"
                bio="Matt is a junior from Syracuse, NY. He loves food, traveling, and 
                immersing himself in new cultures. When not working on TAMID projects, 
                he's either cooking, eating, thinking about eating, studying, or sleeping." img={matthew}/>
            </div>
            <div>
                <Profile name="Steven Cheung" year="'22" pos="Director of Technology"
                bio="Steven is a junior concentrating in Computer Science from Pittsburgh, PA.
                His hobbies include soccer, tennis, and speed solving Rubik's cubes." img={steven}/>
            </div>
        </div>
        <LineBreak/>
        <br/>
        
    </Container>
)
