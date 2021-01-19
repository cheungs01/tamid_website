import React from 'react'
import Container from 'react-bootstrap/Container'; 
import './App.css';
import { LineBreak } from './components/Line';

export const Consulting = () => (
    <Container fluid>
        <div className="title">Consulting</div>
        <div className="text">
            <p>
                TAMID at Brown offers pro bono consulting services to 
                international high-tech start-ups. The organization produces 
                deliverables focused on its core competencies which include, 
                but are not limited to market analysis and research, 
                go-to-market strategy, competitor analysis, and pricing 
                strategy. As either a Business Analyst, Project Manager, or 
                Strategic Advisor, members will gain diverse industry exposure 
                and unique experience serving clients who value TAMID’s work.
            </p>
            <br/>
            <p>
                For more information, contact our Directors of Consulting 
                <a href="mailto: neel_dhavale@brown.edu"> Neel</a> or  
                <a href="mailto: matthew_dai1@brown.edu"> Matthew </a>.
            </p>
        </div>

        <LineBreak/>

        <div className='subtitle'>Past Projects</div>

        <br/>
        
    </Container>
)
