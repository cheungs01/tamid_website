import React from 'react'
import Container from 'react-bootstrap/Container'; 
import './App.css';
import { AlumniProfile } from './components/team/AlumniProfile';
import { LineBreak } from './components/Line';
import ben from './assets/ben_headshot2.jpg';
import ariele from './assets/ArieleTAMID.jpeg';
import kobi from './assets/KobiTAMID.jpeg'; 
import owen from './assets/OwenTAMID.jpg';
import blank from './assets/blank.png'; 

export const Alumni = () => (
    <Container fluid>
        <div className='title'>Alumni</div>
        <LineBreak/>
        <br/>
        <div class="grid">
            <div>
                <AlumniProfile 
                name="Benjamin Fink" year="'21" pos="Former President"
                conc="Economics and Classics" 
                career="Incoming Investment Banking Analyst at PJ Soloman" 
                img={ben}/>
            </div>
            <div>
                <AlumniProfile 
                name="Jordana Siegel" year="'20" pos="Former Director of Recruitment"
                conc="Behavioral Decision Sciences, Urban Studies" 
                career="Associate Product Manager at Visa" 
                img={blank}/>
            </div>
            <div>
                <AlumniProfile 
                name="Ariele Ladabaum" year="'20" pos="Former Co-Director of Consulting"
                conc="Environmental Science" 
                career="Marketing Associate, Voltus Inc." 
                img={ariele}/>
            </div>
            <div>
                <AlumniProfile 
                name="Owen Colby" year="'20" pos="Former President"
                conc="Computer Science, Economics, and Public Policy" 
                career="Associate Consultant at Bain & Company" 
                img={owen}/>
            </div>
            <div>
                <AlumniProfile 
                name="Kobi Weinberg" year="'20" pos="Former Founder and President"
                conc="Environmental Science (focus on Economics & Sustainable Agriculture)" 
                career="Impact Associate @Nephila Climate; Managing Editor @Climate Tech VC" 
                img={kobi}/>
            </div>

            
        </div>  
        <LineBreak/>
        <br/>
        
    </Container>
)
